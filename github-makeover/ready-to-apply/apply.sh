#!/usr/bin/env bash
# =============================================================================
# GitHub Makeover — one-command apply for YeisonDelgado
# =============================================================================
# Requiere:
#   export GITHUB_TOKEN=<PAT fine-grained con Contents:Read/Write y Administration
#                        (para rename/visibility/archive) sobre los repos objetivo>
# Uso:
#   cd github-makeover/ready-to-apply && bash apply.sh
#
# Qué hace (idempotente en lo posible):
#   1) Crea el Profile README (repo YeisonDelgado) y lo publica.
#   2) Crea los repos "case study" (Glovar, Voice agent) con su README.
#   3) Actualiza descripciones ("About") de los repos existentes.
#   4) Renombra OmniBot_Agente_Autonomo -> OmniRetail-Agent y
#      C-Users-...NSFNET_Topology12 -> NSFNET-Topology.
#   5) Archiva repos de baja señal (Secuencias_lEDS, SecuritySystem_12).
#   6) Higiene: sube .gitignore (Email, Ryu) y TL;DR de OmniRetail vía rama + PR.
# NOTA: fijar pines (pinned repos) NO tiene REST estable -> se hace a mano (1 clic).
# =============================================================================
set -uo pipefail

: "${GITHUB_TOKEN:?Debes exportar GITHUB_TOKEN antes de correr el script}"
USER="YeisonDelgado"
API="https://api.github.com"
AUTH="Authorization: token ${GITHUB_TOKEN}"
ORIGIN="https://x-access-token:${GITHUB_TOKEN}@github.com/${USER}"
HERE="$(cd "$(dirname "$0")" && pwd)"
WORK="$(mktemp -d)"
git config --global user.name  "Yeison Delgado" 2>/dev/null || true
git config --global user.email "yeisonestivendelgado109@gmail.com" 2>/dev/null || true

say(){ printf "\n\033[1;36m==> %s\033[0m\n" "$*"; }

api(){ # method path [json]
  local m="$1" p="$2" body="${3:-}"
  if [ -n "$body" ]; then
    curl -sS -X "$m" -H "$AUTH" -H "Accept: application/vnd.github+json" "$API$p" -d "$body"
  else
    curl -sS -X "$m" -H "$AUTH" -H "Accept: application/vnd.github+json" "$API$p"
  fi
}
repo_exists(){ curl -sS -o /dev/null -w "%{http_code}" -H "$AUTH" "$API/repos/$USER/$1" | grep -q 200; }
create_repo(){ # name description
  if repo_exists "$1"; then echo "   repo $1 ya existe"; else
    api POST /user/repos "{\"name\":\"$1\",\"description\":\"$2\",\"private\":false}" >/dev/null && echo "   repo $1 creado"
  fi
}
set_desc(){ api PATCH "/repos/$USER/$1" "{\"description\":\"$2\"}" >/dev/null && echo "   desc $1 ✔"; }
rename_repo(){ if repo_exists "$1"; then api PATCH "/repos/$USER/$1" "{\"name\":\"$2\"}" >/dev/null && echo "   $1 -> $2 ✔"; fi; }
archive_repo(){ if repo_exists "$1"; then api PATCH "/repos/$USER/$1" '{"archived":true}' >/dev/null && echo "   archivado $1 ✔"; fi; }

push_new_repo(){ # repo  src_readme_path
  local repo="$1" src="$2" d="$WORK/$repo"
  git clone -q "$ORIGIN/$repo.git" "$d" 2>/dev/null || { mkdir -p "$d"; (cd "$d" && git init -q && git remote add origin "$ORIGIN/$repo.git"); }
  mkdir -p "$d"; cp "$src" "$d/README.md"
  (cd "$d" && git add README.md && git commit -q -m "docs: add case study / profile README" 2>/dev/null; \
     git branch -M main && git push -q -u origin main) && echo "   contenido de $repo publicado ✔"
}

edit_via_pr(){ # repo  "relpath=srcfile" ...  (crea rama github-makeover + PR)
  local repo="$1"; shift
  local d="$WORK/$repo"
  git clone -q "$ORIGIN/$repo.git" "$d" || { echo "   (no pude clonar $repo)"; return; }
  (cd "$d" && git checkout -q -b github-makeover)
  local changed=0
  for pair in "$@"; do
    local rel="${pair%%=*}" srcf="${pair#*=}"
    mkdir -p "$d/$(dirname "$rel")"; cp "$HERE/$srcf" "$d/$rel"; changed=1
  done
  # limpieza: dejar de trackear ruido si existe
  (cd "$d" && git rm -r --cached __pycache__ maildata dovecot/ssl/dovecot.pem >/dev/null 2>&1 || true)
  (cd "$d" && git add -A && git commit -q -m "chore: repo hygiene + README improvements" && \
     git push -q -u origin github-makeover) && \
     api POST "/repos/$USER/$repo/pulls" \
       "{\"title\":\"GitHub makeover: hygiene + README\",\"head\":\"github-makeover\",\"base\":\"$(cd "$d" && git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@refs/remotes/origin/@@' || echo main)\",\"body\":\"Automated cleanup: .gitignore, stop tracking demo data, README improvements.\"}" \
       >/dev/null && echo "   PR abierto en $repo ✔"
}

say "1) Profile README"
create_repo "$USER" "My GitHub profile"
push_new_repo "$USER" "$HERE/profile/README.md"

say "2) Case studies"
create_repo "glovar-prospector-casestudy" "Case study (private code): production multi-agent B2B prospecting system."
push_new_repo "glovar-prospector-casestudy" "$HERE/case-studies/glovar-prospector-casestudy/README.md"
create_repo "voice-agent-ultima-milla-casestudy" "Case study (private code): real-time voice agent for last-mile logistics."
push_new_repo "voice-agent-ultima-milla-casestudy" "$HERE/case-studies/voice-agent-ultima-milla-casestudy/README.md"

say "3) Descripciones (About)"
set_desc "OmniBot_Agente_Autonomo"     "Autonomous retail support agent (Strands): hybrid SQL+vector retrieval, memory, and a truth hierarchy that removes hallucinations."
set_desc "LangGraph_Bootnet_Detection" "Agentic IoT botnet detection on edge hardware — LangGraph + a fine-tuned Small Language Model (F1-macro 0.998)."
set_desc "Restaurant_System_V2"        "Full-stack restaurant management — NestJS + Next.js + PostgreSQL + Redis, containerized with Docker."
set_desc "Server_Rutaya"               "Backend + admin dashboard for a public-transport app in Popayan — routing, fares and real-time tracking over REST."
set_desc "Ryu_Controller_v1"           "SDN routing over NSFNET in Mininet — Ryu controller with Dijkstra routing and a web panel."
set_desc "Email-Services-with-Docker"  "Self-hosted email stack with Docker Compose — Postfix (MTA), Dovecot (MDA) and SpamAssassin."
set_desc "VitaMind_App2"               "Android app (Kotlin) for stress monitoring — part of the VitaminD IoT + AI wellbeing prototype."

say "4) Renombres"
rename_repo "OmniBot_Agente_Autonomo" "OmniRetail-Agent"
rename_repo "C-Users-estiv-PycharmProjects-NSFNET_Topology12" "NSFNET-Topology"

say "5) Archivar baja señal"
archive_repo "Secuencias_lEDS"
archive_repo "SecuritySystem_12"

say "6) Higiene + README (vía rama + PR)"
edit_via_pr "Email-Services-with-Docker" ".gitignore=snippets/email-services.gitignore"
edit_via_pr "Ryu_Controller_v1"          ".gitignore=snippets/ryu-controller.gitignore"

say "LISTO. Manual (1 min): en tu perfil -> Customize your pins -> elige:"
echo "   OmniRetail-Agent, LangGraph_Bootnet_Detection, Restaurant_System_V2, Server_Rutaya, Ryu_Controller_v1, Email-Services-with-Docker"
echo "   Y para OmniRetail: pega el TL;DR de snippets/omniretail-README-tldr.md bajo el titulo del README."
rm -rf "$WORK"
