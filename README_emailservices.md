# Email-Services-with-Docker
Proyecto  Servicios Telemáticos, se implementa un sistema de correo electrónico con Docker Compose, utilizando Postfix (MTA), Dovecot (MDA) y SpamAssassin. El objetivo es diseñar, desplegar y probar una arquitectura de correo auto-contenida que permita enviar, recibir y filtrar mensajes entre usuarios, aplicando protocolos SMTP, POP3 e IMAP. 

## 📌 Overview
This project implements a containerized **email server environment** using Docker Compose.  
It integrates:
- **Postfix** → Mail Transfer Agent (SMTP).
- **Dovecot** → Mail Delivery Agent (IMAP/POP3).
- **SpamAssassin** → Spam filtering via Milter.

The goal is to simulate the architecture of a real email system and understand the interaction between its components.
---
## 🎯 Objectives
- Deploy a functional email stack in **Docker**.  
- Support **SMTP, POP3, and IMAP** protocols.  
- Provide **spam filtering** before message delivery.  
- Ensure **data persistence** across container restarts.  
- Enable testing with standard mail clients (e.g., Thunderbird).  
---

## 🛠️ Requirements
- Linux basics (commands, editors).  
- Docker & Docker Compose installed.  
- Basic networking concepts (IP, DNS, client/server model).  
---

## 🏗️ Architecture
The system is based on **three main containers**:
1. **Postfix (MTA)**  
   - Handles sending/receiving mail via **SMTP**.  
   - Forwards messages to the spam filter before delivery.  
2. **SpamAssassin (Milter)**  
   - Analyzes incoming mail.  
   - Marks spam using headers (`X-Spam-Flag`, `X-Spam-Status`).  
3. **Dovecot (MDA)**  
   - Provides access to mailboxes using **IMAP** and **POP3**.  
   - Shares the same `maildata` volume with Postfix.
   - 
```mermaid
flowchart LR
    Client[Mail Client: Thunderbird] -->|SMTP| Postfix
    Postfix -->|Milter| SpamAssassin
    SpamAssassin --> Postfix
    Postfix -->|Maildir| Dovecot
    Client -->|IMAP/POP3| Dovecot
