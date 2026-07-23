# Autonomous Botnet Mitigation at the Edge via Multi-Agent Systems and Parameter-Efficient Small Language Models (SLMs)

> Manuscript draft (v3) — accessible, image-first rewrite.
> Order: Architecture, Prototype, Test Environment, Dataset, Feature Engineering, and Models.
> Deployment target: **NVIDIA Jetson Orin Nano (8 GB LPDDR5, 40 TOPS INT8, Ampere GPU)**.
>
> Writing notes for this version: shorter sentences and plain words; every technical term is explained the first time it appears; for every section that has an image, the figure is placed first and the text tells its story (what is shown → why → what is observed → what is concluded). Figures are numbered to match the images that actually exist: Fig. 1 (Architecture), Fig. 2 (Prototype), Fig. 3 (Test Environment), Fig. 4 and Fig. 5 (Feature Engineering, two images), and Fig. 6–11 (Models, six images). The Dataset section has no image.

---

## I. Architecture

**Figure 1.** *— Overall architecture of the botnet detection system running on the Central Edge Node.*

Figure 1 shows the complete design of the system. Everything runs inside a single device placed at the edge of the network, which we call the Central Edge Node. The goal of the figure is to follow a piece of network traffic from the moment it arrives until the system decides what to do with it. The rest of this section walks through that path.

### A. Reading the figure

Reading Figure 1 from left to right, the traffic produced by the IoT devices first enters the **Ingestion** block. It then moves to a group of components that reason and decide (the **agents**), next to a set of **tools** that act on the network, and finally to a **memory** that lets the system keep learning over time. In short, the system does four things, in order: it receives the data, classifies it with small AI models, acts on the result, and remembers what it learned.

The most important message of the figure is that all of this happens on one device. The node does not need to send anything to an external gateway in order to make a decision. This is what lets it react fast and keep working even without a stable Internet connection.

To classify the traffic, the system uses a **Small Language Model (SLM)** — a compact AI model, small enough to run on a low-power device. Instead of loading several models (which would not fit in memory), the system loads this model only **once** and reuses it for two different jobs. It switches between jobs using **LoRA adapters**: small "add-on" files that adjust the model for a specific task without changing the model itself. The figure shows two of these adapters, one per agent.

### B. The path of a traffic flow

The traffic first reaches the **Classifier Agent**. This agent takes a fast, first look and sorts each flow into one of three groups:

- **BENIGN** — normal traffic, with no sign of an attack.
- **SUSPICIOUS** — there is a weak sign of a botnet, but the model is not sure.
- **MALICIOUS** — there is a clear, confident sign of a botnet.

If the flow is **MALICIOUS** or **SUSPICIOUS**, it goes to the **Analyst Agent**. This second agent looks more carefully and tries to name the exact botnet family or attack type. Before giving its final answer, it checks the system's memory (the knowledge base) using the `tool_vector_search` tool, so it can compare the new flow against attacks it has already seen.

Sometimes the Analyst Agent cannot match the flow to any known attack. In that case the flow is treated as a possible **zero-day** — a brand-new attack that has never been seen before. Instead of retraining the model (which is slow and expensive), the system simply **saves** that new pattern into its memory using `tool_vector_writer`, so it can recognize it next time.

Finally, the **Edge Execution Node** carries out the decision. If the flow is dangerous, it blocks it with `tool_firewall_block`; if it is benign, it lets it through. This is the step where a decision becomes a real action on the network.

### C. The modules, one by one

**1) Ingestion.** This is the entry point for the data, whether it comes from real network traffic or from a dataset. It formats the incoming data so it can be passed cleanly to the next module.

**2) Edge Orchestration.** This is the "brain" of the system. It runs the agents one after another and decides which one acts next. To keep the memory footprint small, all agents share a single, frozen SLM that stays in memory, and they switch behavior through the lightweight LoRA adapters. It contains:

- **Classifier Agent** — gives the quick, first verdict and acts as a fast filter.
- **Analyst Agent** — takes over when something looks wrong and identifies the exact attack type.
- **Edge Execution Node** — runs the actual network commands when needed.
- **Continuous Learning Node** — stores a flow when the Analyst Agent cannot name the attack, which is how the system can later recognize zero-day attacks.

**3) Tools.** The tools give the agents the ability to *act*, not just classify:

- `tool_vector_search` — lets the Analyst Agent search the memory for known botnet patterns.
- `tool_firewall_block` — drops malicious packets to protect the IoT devices.
- `tool_vector_writer` — records new, unseen behavior into the memory for future use.

**4) Continuous Learning (memory that grows).** The system keeps learning *without* retraining the model. When the Analyst Agent finds a flow it cannot name, the flow is sent here, and `tool_vector_writer` stores its pattern in the memory. The next time a similar flow appears, `tool_vector_search` finds it right away. Storing examples of normal traffic in the same memory also helps the system avoid false alarms. This gives the node a form of lifelong learning at very little extra cost.

### D. Why this design

This architecture was chosen for one main reason: it turns a system that only *detects* attacks into one that also *reacts* to them and *learns* from them, all on a single low-power device. Earlier IoT detectors mostly raised an alarm and waited for a human. Here, the node decides and acts on its own, and it gets better over time by adding new attacks to its memory instead of being retrained.

---

## II. Prototype

**Figure 2.** *— Multi-agent prototype implemented at the network edge.*

The main objective of Figure 2 is to show how the design of Section I becomes a real, running program inside the device: which software piece does each job, and how a single traffic flow travels through them from start to finish. The figure should be read as a guide to the parts and their order; the components and versions described below are the reference, since they were checked against the software that NVIDIA actually supports on this hardware.

The whole prototype is a **Python 3.10.12** application — the version that ships with the device's operating system (Ubuntu 22.04 inside JetPack 6.2) and the only one for which NVIDIA provides GPU-ready libraries on this Arm board. Its parts map directly onto the four blocks of Section I.

**Ingestion.** The entry point reads the network-feature rows (the 46-feature vectors from Section V) using **Pandas 2.2.3** with **NumPy 1.26.4**, the common Python libraries for tabular data. NumPy is deliberately kept on the 1.26 line, because the NVIDIA PyTorch build for this board is compiled against it. Ingestion shapes each row so the next block can use it directly.

**Orchestration (the agent controller).** The control logic is built with **LangGraph 0.2.x**, a framework that models the system as a small graph: each block is a step that updates a shared state (a plain Python dictionary), and the links between steps decide who acts next. This is the process the figure traces — a flow enters, the Classifier Agent gives a first verdict, and a conditional branch sends benign traffic straight to the exit while suspicious or malicious traffic is routed to the Analyst Agent. The tools the Analyst Agent can call are exposed as **LangChain 0.3.x** functions.

**Inference (the shared model).** Both agents share a single **Llama-3.2-1B** model kept in memory — the model chosen as best in Section VI. It is served with the **Hugging Face Transformers 4.47.x** runtime together with **PEFT 0.14.x**, the library that loads and switches **LoRA adapters** (the small "add-on" files that specialize the model for one task). This stack was chosen because it is the only one that meets the key memory rule: keep one base model resident and switch between two small adapters on top of it, instead of loading several full models. The Classifier and Analyst Agents simply swap their adapters (`classifier_lora.bin` and `botnet_id_lora.bin`) on the shared model — through PEFT's `set_adapter()` call — without reloading the heavy base weights. Underneath, the model runs on the NVIDIA build of **PyTorch 2.5.0** (the special `jp6/cu126` Jetson wheel, not the regular one from PyPI).

**Memory and action (tools).** The memory for continuous learning is **ChromaDB 0.5.x**, a small vector database that runs fully in RAM; because it never leaves memory, searches are fast (about 15 ms in the typical case). The Analyst Agent reads and writes this memory with `tool_vector_search` and `tool_vector_writer`, while `tool_firewall_block` blocks traffic directly through the Linux `iptables` firewall. The flow ends, as the figure shows, in a real action on the network: block it, or let it pass.

The whole prototype runs on an **NVIDIA Jetson Orin Nano (8 GB)**: a 6-core Arm Cortex-A78AE CPU, an Ampere GPU, and 8 GB of shared LPDDR5 memory, delivering up to 40 TOPS while using only 7–15 W, under **JetPack 6.2** (Jetson Linux/L4T r36.4, Ubuntu 22.04, kernel 5.15, CUDA 12.6 / cuDNN 9.3 / TensorRT 10.3). The model is kept in **half precision (FP16, about 2.5 GB)** rather than the smaller 4-bit format. The reason is simple: the 8 GB of memory is enough, so there is no need to shrink the model further, and the 4-bit option would add a fragile dependency (`bitsandbytes`, still preview-only on this Arm board) and a per-prediction unpacking delay. With one FP16 model, two small adapters, and the in-memory database, everything fits comfortably in the device's memory budget.

---

## III. Test Environment and Evaluation Protocol

**Figure 3.** *— The training, inference, and audit planes of the project.*

The main objective of Figure 3 is to show that the project is organized into three connected "planes," each with a clear job: a **Training Plane** in the cloud that builds the model, an **Inference Plane** on the edge device that runs it, and an **Evaluation and Audit Plane** that watches how it behaves. Keeping training and inference apart is the key idea — it lets a low-power device use a model that was trained on much stronger hardware. As before, the figure is a guide to the pieces and their roles; the versions below are the reference, since they were validated against each platform.

### A. The training, inference, and audit planes

The **Training Plane** lives in the cloud, on **Google Colaboratory** running **Python 3.12** (the current Colab default). Its hardware is a single **NVIDIA T4 GPU (16 GB of video memory)**, backed by about 100 GB of working storage and 64 GB of host RAM. Training uses the **Unsloth 2025.x** framework, which sits on top of **PyTorch 2.4.x–2.5.x**, **Hugging Face Transformers 4.46.x–4.47.x** and **PEFT 0.13.x–0.14.x**, with **TRL 0.11.x–0.12.x** for the supervised fine-tuning step. Unsloth lowers memory use by applying 4-bit compression through **bitsandbytes 0.44.x** (used only during training) together with optimized routines, so the whole job fits inside the 16 GB limit; the data is streamed from disk in small batches (with **datasets 3.x**) to avoid out-of-memory errors. When training finishes, the model and its LoRA adapters are published to public hubs (**Hugging Face** and **Kaggle**) so the work can be shared and reused.

The **Inference Plane** is the Jetson edge device, where the trained model becomes the running Botnet Detection Agent of Sections I–II. It runs on **Python 3.10**, using only the library versions NVIDIA supports there (the inference stack of Section II). Training and inference are deliberately kept apart, and this is normal rather than a contradiction: the cloud can use the newest software because it only *produces* the adapters, while the device stays on the pinned, GPU-ready versions. Finally, the **Evaluation and Audit Plane** watches the system: as Figure 3 shows, the agent's runs and traces are sent to **LangSmith (0.1.x/0.3.x)** for tracing, monitoring, and evaluation; it plays no part in detection, so it never competes for the device's memory or compute. Simple hardware metrics (storage, RAM, and latency) are also recorded so the real on-device cost can be measured.

### B. How the data is split

The balanced dataset of about 1.44 million records (built in Section V-A) was split into three parts: **70% for training, 15% for validation, and 15% for testing**. The split keeps the three classes (Benign, Mirai, and BASHLITE) equally represented in all three parts. To avoid "leaking" information between parts, the scaler used to normalize the data (the RobustScaler from Section V-A) was computed only on the training part and then applied to the other two. The validation part was used to tune settings and to stop training at the right moment; all the final numbers reported in Section VI come from the test part, which the model never saw during training. Speed (latency) was measured directly on the Jetson device, one flow at a time, after a short warm-up so that one-time startup costs are not counted.

### C. How model quality is measured

Model quality is measured with four metrics computed from the confusion matrix (the table that compares predictions against the true labels): **Accuracy, Precision, F1-Macro, and the Matthews Correlation Coefficient (MCC)**. Accuracy is shown only for reference, because it can look too good when one class is much more common than the others. **F1-Macro is used as the main metric**: it treats the three traffic classes equally, so a model is punished if it does well on the common case but ignores a rare attack family. The MCC is used as a second check; it only reaches a high value when the model does well on all classes at the same time, which makes it a good measure for security problems with several, unbalanced classes.

---

## IV. Dataset

This section describes the data used to train, test, and deploy the system, and explains why it was chosen. It has no figure.

Choosing the right dataset is a key decision for a botnet detector. Several well-known network-security datasets were considered first, including KDD Cup 99, UNSW-NB15, CICIDS2017, and BoT-IoT. They were set aside for edge use because they either cover general malware too broadly, do not focus on IoT devices, or rely on deep packet inspection — a technique that reads the content of the traffic, which raises privacy concerns and is too heavy for a small device.

For these reasons, the **N-BaIoT** dataset (Network-Based Detection of IoT Botnet Attacks) was selected. N-BaIoT is built to represent realistic IoT networks while they are under attack. It collects traffic from nine real commercial IoT devices (such as smart doorbells, security cameras, and thermostats) infected by two well-known IoT botnet families, **Mirai** and **BASHLITE**. Its main advantage is *how* it describes the traffic: instead of reading packet contents, it summarizes network behavior with 115 statistics measured over several time windows, from 100 milliseconds up to 1 minute. This kind of tabular, time-aware description fits the proposed system well, because it lets the model recognize attacks from their behavior alone, without looking inside the packets.

---

## V. Feature Engineering

Feeding all 115 statistics to the SLM is wasteful: it makes each input longer to process and slows down detection. So a careful pipeline was built to keep only the most useful features for the edge device. This section first explains how the data was cleaned and stabilized, and then shows, with two figures, how the 115 features were reduced to a compact set.

### A. Loading and stabilizing the data

The full dataset is very large (about 7 million rows). During loading, a random sampling step was used to keep about 1.44 million **balanced** records (roughly 480,000 per class: Benign, Mirai, and BASHLITE). This keeps every class well represented while avoiding out-of-memory problems. A first look at the data confirmed there were no missing values, and features that never changed (from disconnected devices) were removed.

One decision matters a lot here: outliers were kept on purpose. In IoT security, a huge traffic spike is not a measurement error — it is exactly the signature of a DDoS attack. This choice also decided how the data was scaled. The first attempt, standard normalization, made things worse: the extreme spikes of Mirai attacks pulled the average up and squeezed normal traffic into a tiny, hard-to-read range. The solution was the **RobustScaler**, which scales data using the median and the middle range of values instead of the average. This keeps normal traffic readable even next to huge attack spikes, and preserves the real structure of the data.

### B. First reduction: removing redundant features

**Figure 4.** *— Comparison of feature-filtering approaches and the reduction achieved in the first phase.*

Figure 4 compares different ways of filtering features and shows how much each one removes. The goal of the figure is to justify the method that was finally chosen for this first step.

The first try used **Pearson correlation**, a common way to spot features that move together. It failed: the model's F1-score got stuck around 0.57. The reason is shown by the comparison in Figure 4. Pearson only detects straight-line relationships, so it misses the explosive, non-linear traffic bursts of IoT attacks; and looking at all traffic types at once let the aggressive Mirai patterns cancel out the normal baseline.

The fix was to use **Spearman rank correlation**, which detects features that rise and fall together even when the relationship is not a straight line, and to apply it separately to each of the three traffic types, with a strict threshold (above 0.99). As Figure 4 shows, this removed 21 highly redundant features and left a cleaner set of **94 features**.

### C. Second reduction: a vote among seven methods

**Figure 5.** *— Survival heatmap: which features were kept by each selection method.*

Figure 5 is a heatmap that shows, for each feature, which methods voted to keep it. Each row is a feature and each column is a method; a marked cell means that method considered the feature important. The goal of the figure is to show that the final features were not chosen by a single method, but agreed upon by several.

To go from 94 features down to a minimal but powerful set, and to avoid the bias of any single method, seven independent methods were used together as a kind of voting panel. They cover the three main families of feature-selection techniques:

1. Mutual Information,
2. ANOVA F-value,
3. Random Forest,
4. Extra Trees,
5. RFECV (recursive elimination with cross-validation),
6. SHAP (game-theory-based importance), and
7. RFE-PFI (recursive elimination with permutation importance).

So the full pipeline uses eight methods in total: one in the first phase (Spearman) and seven here. It was implemented in Python, using **pandas 2.2.x** for loading, **scipy 1.13.x** for the Spearman step, **scikit-learn 1.5.x** for the RobustScaler and most of the selectors (Mutual Information, ANOVA F-value, Random Forest, Extra Trees, RFECV, and RFE-PFI), and the **SHAP 0.46.x** library for the game-theory importance.

Each method scored the features in its own way. A feature was kept only if at least **two of the seven methods** voted for it. Reading the heatmap in Figure 5, this democratic rule converged on a final set of **46 features**. The heatmap also makes something clear: the botnet patterns are not found in broad averages, but mostly in very-short-window packet timing (the `HH_jit` features) and in how traffic moves in each direction. This 46-feature set keeps the model expressive while making each input much shorter to process on the resource-limited edge device.

---

## VI. Models

This section shows how the candidate models were tested and filtered down to a single best choice for the edge. The training setup, software, data split, and metrics behind these experiments are described in Section III. The section moves through the figures in order: first it checks how many features to use, then it filters models by quality, and finally by hardware fit.

### A. How many features? (115 vs. 20 vs. 46)

To confirm that the 46-feature set from Section V is the right size, the models were trained three times: with all 115 features, with an aggressively cut set of 20 features, and with the chosen 46. The next three figures show the results for each case.

**Figure 6.** *— Results with the full 115-feature set.*

Figure 6 shows what happens with all 115 features. Large models still score well, but the high number of features adds a heavy load. The clearest sign of this is that very small models, such as SmolLM2-360M, fail to learn properly here: there are simply too many features for them to handle.

**Figure 7.** *— Results with the reduced 20-feature set.*

Figure 7 shows the opposite problem. With only 20 features, results drop across all models. Cutting too much removes the key timing and direction information, so the models no longer have enough to work with. This is underfitting: the input is too poor.

**Figure 8.** *— Results with the optimized 46-feature set.*

Figure 8 shows the chosen middle ground. With 46 features, all the main metrics (Accuracy, Precision, F1-Macro, and MCC) stay high — and for SmolLM2-360M and Qwen2.5-0.5B they even improve compared to the full set. Training is more stable, and the model stays accurate while the input is much smaller. This confirms that 46 features is the best trade-off.

### B. First filter: a 1% quality margin

**Figure 9.** *— F1-Macro of all candidate models, with the rejection threshold marked.*

With the input fixed at 46 features, the models were ranked by quality. Figure 9 shows the F1-Macro of every candidate, with a clear line marking the cutoff. The goal of the figure is to keep only the models that are very close to the best one.

The rule was strict: a model had to be within 1% of the best score to pass. The top models reached an F1-Macro of 0.998, so the cutoff was set at 0.988. As the green "pass" zone in Figure 9 shows, the classic encoder and small text-to-text models fell below this line and were rejected — DistilRoBERTa (about 0.930), Flan-T5-Small (about 0.953), and DeBERTa-v3-Small (about 0.977). Only **Llama-3.2-1B** and **Qwen2.5-0.5B** stayed inside the 1% margin and moved on.

### C. Second filter: fitting the hardware

**Figure 10.** *— Quality (F1-Macro) against storage size, in MB, for the candidate models.*

Edge deployment has two hard limits: the model must fit in the small memory of the device (usually 4 GB to 8 GB), and it must answer fast enough. Figure 10 maps each model's quality against its storage size. The goal of the figure is to show, at a glance, which models are too heavy.

Reading Figure 10, there is a clear gap between the small models and the large ones such as Llama-3.2-1B and Phi-1.5. The large models score at the top for quality, but their full size is heavy for a small device. So quality alone is not enough; size must be considered too.

### D. The cost of compression, and the final choice

**Figure 11.** *— Quality (F1-Macro) against inference time per flow, after 4-bit compression.*

To fit the storage limit shown in Figure 10, the two surviving models (Llama-3.2-1B and Qwen2.5-0.5B) were compressed to 4 bits using QLoRA (a method that trains LoRA adapters on a 4-bit model). Compression made both models small enough, and they kept almost perfect quality (0.999 and 0.996). But it added a new problem: speed.

Figure 11 compares the two models on the two things that matter most at the edge: how *well* they classify (vertical axis, F1-Macro) and how *fast* they answer (horizontal axis, milliseconds per flow). Two things stand out. First, both keep an almost perfect quality, so there is no real loser on accuracy. Second, they clearly differ on speed: Llama-3.2-1B answers in about **93.8 ms**, while Qwen2.5-0.5B is slower, between **123 and 141 ms**.

This may look surprising, since Qwen is the smaller model. The reason is the compression itself: every time the model makes a prediction, it has to "unpack" its 4-bit numbers back into full numbers, and that extra step adds delay on each request. Here, that penalty hurts Qwen more than Llama.

From this we conclude that **Llama-3.2-1B is the model to deploy**: it wins on both axes at once — slightly higher quality (0.999 vs. 0.996) and clearly lower delay (about 93.8 ms vs. 123–141 ms). The figure also teaches a practical lesson: compression solves the memory problem but creates a speed problem, and 93.8 ms is already close to the system's real-time limit. This comparison was done under 4-bit compression on purpose, to show the worst case for memory and speed across the candidates. For the final device, however, the chosen model runs in **half precision (FP16)** within the 8 GB of the Jetson (Section II). That choice avoids the fragile 4-bit dependency and removes the per-prediction unpacking delay seen here.
