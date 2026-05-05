<p align="center">
  <img src="assets/banner.png" alt="Sol Diz MCP Banner" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Injured-ff4d4f?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2eiIvPjwvc3ZnPg==" />
  <img src="https://img.shields.io/badge/Meniscus-Torn-d9363e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/ACL-Partial%20Tear-fa8c16?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Surgery-None-595959?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Surgery%20Plan-Not%20Planned-262626?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MRI%20Count-Lost%20Track-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Doctors%20Seen-Many-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Loops%20Survived-∞-success?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Bone%20Dry-lightgrey?style=flat-square" />
</p>

---

# 🦴 Sol Diz MCP &nbsp;/&nbsp; Left Knee MCP

> _An AI-native, doctor-enablement platform for high-velocity clinical context transfer._
> _AKA: I got tired of re-explaining my knee._

---

## 🇹🇷 Türkçe

### 📖 Hikaye

**12 Ocak 2025** tarihinde bir _halı saha_ maçında sakatlandım.

O günden beri bir yılı aşkın süredir şu premium üyelik paketinin içindeyim:

> **"Yeni doktora git, her şeyi baştan anlat, bir MR daha çek."**

Standart randevu akışı şu şekilde ilerliyor:

```mermaid
flowchart TD
    START([🏥 Yeni Randevu]):::gray --> A

    A[🔴 Ağrı anlatımını yeniden başlat<br/>Baştan başla. Yine.]:::coral
    A --> B[🟡 Eski MR efsanelerini yükle<br/>Kadim belgeler, bir kez daha.]:::amber
    B --> C[🔵 Öneri al<br/>'Bir MR daha çekelim.']:::blue
    C --> D[🟣 MR çektir<br/>Cihazla ilişkimiz güçlü.]:::purple
    D --> E[🟢 Duygusal dayanıklılığı artır<br/>Seviye atla. Tekrarla.]:::teal
    E --> F{Ameliyat?}:::gray
    F -->|Hayır - Her zaman| A
    F -->|Evet - Teorik| DONE([🎉 Özgürlük]):::green

    classDef coral fill:#FAECE7,stroke:#D85A30,color:#712B13
    classDef amber fill:#FAEEDA,stroke:#BA7517,color:#633806
    classDef blue  fill:#E6F1FB,stroke:#378ADD,color:#0C447C
    classDef purple fill:#EEEDFE,stroke:#7F77DD,color:#3C3489
    classDef teal  fill:#E1F5EE,stroke:#1D9E75,color:#085041
    classDef green fill:#EAF3DE,stroke:#639922,color:#3B6D11
    classDef gray  fill:#F1EFE8,stroke:#888780,color:#444441
```

Bu noktada MR cihazıyla olan ilişki metriklerim, birçok startup kurucu ortaklığından daha güçlü.

Bu yüzden yapılacak tek mantıklı ve ölçeklenebilir şeyi yaptım: **sol dizim için bir MCP sunucusu kurdum.**

---

### 🎯 Amaç

`left-knee-mcp`, yüksek hızlı klinik bağlam aktarımı için tasarlanmış, AI-native bir doktor etkinleştirme platformudur. Doktorlar kendi LLM'lerini diz zaman çizelgeme bağlayıp, her randevuda benden aynı hikayeyi canlı canlı dinlemek yerine anında yapılandırılmış içgörü alabilir.

| Özellik                          | Çözüm                       |
| -------------------------------- | --------------------------- |
| 🔁 Sonsuz hikaye döngüsü         | LLM destekli ön brifing     |
| 📋 MR geçmişi karmaşası          | Zaman çizelgeli özet        |
| 🤔 "Bir MR daha" refleksi        | Bağlam zengin karar desteği |
| 😮‍💨 Hasta her şeyi tekrar anlatır | Dramatik yük azaltımı       |

**Özetle:** daha az döngü, daha çok netlik, daha verimli görüşme.

---

### ▶️ Çalıştırma

```bash
npm install
npm start
```

---

## 🇬🇧 English

### 📖 Origin Story

On **12 January 2025**, I got injured during a _soccer_ match.

Since then, I have spent more than a year enrolled in a premium subscription plan called:

> **"See a new doctor, explain everything again, get another MRI."**

The standard appointment workflow currently looks like this:

```mermaid
flowchart TD
    START([🏥 New Appointment]):::gray --> A

    A[🔴 Reboot pain narrative<br/>Start from the very beginning. Again.]:::coral
    A --> B[🟡 Upload old MRI lore<br/>The ancient scrolls, once more.]:::amber
    B --> C[🔵 Receive recommendation<br/>'Let's get one more MRI.']:::blue
    C --> D[🟣 Get another MRI<br/>The machine and I are old friends now.]:::purple
    D --> E[🟢 Improve emotional resilience<br/>Level up. Repeat.]:::teal
    E --> F{Surgery?}:::gray
    F -->|No - Always| A
    F -->|Yes - Theoretical| DONE([🎉 Freedom]):::green

    classDef coral fill:#FAECE7,stroke:#D85A30,color:#712B13
    classDef amber fill:#FAEEDA,stroke:#BA7517,color:#633806
    classDef blue  fill:#E6F1FB,stroke:#378ADD,color:#0C447C
    classDef purple fill:#EEEDFE,stroke:#7F77DD,color:#3C3489
    classDef teal  fill:#E1F5EE,stroke:#1D9E75,color:#085041
    classDef green fill:#EAF3DE,stroke:#639922,color:#3B6D11
    classDef gray  fill:#F1EFE8,stroke:#888780,color:#444441
```

At this point, my MRI machine and I have stronger relationship metrics than most startup co-founders.

So I did the only logical, scalable thing: **I created an MCP server for my left knee.**

---

### 🎯 Mission

`left-knee-mcp` is an AI-native, doctor-enablement platform for high-velocity clinical context transfer. Doctors can connect their LLMs to my knee timeline and instantly receive structured intelligence — instead of making me run the same human API call at every appointment.

| Problem                         | Solution                                |
| ------------------------------- | --------------------------------------- |
| 🔁 Infinite story loop          | LLM-supported pre-consultation briefing |
| 📋 Scattered MRI history        | Timeline-aware structured summary       |
| 🤔 "Just one more MRI" reflex   | Context-rich decision support           |
| 😮‍💨 Patient repeats entire story | Dramatically reduced repeat-overhead    |

**In short:** less loop, more clarity, better conversations.

---

### ▶️ Run

```bash
npm install
npm start
```

---

## 🗺️ Roadmap

- [x] MCP "hello world" server
- [ ] Structured knee injury timeline tool
- [ ] MRI history + findings tool
- [ ] Treatment attempts & outcomes tool
- [ ] Doctor pre-briefing prompt template
- [ ] Achieve a doctor visit without saying "so it started in January 2025..."

---

<p align="center">
  <sub>Built with 🦴 and existential determination &nbsp;|&nbsp; <b>Sol Diz MCP</b> &nbsp;|&nbsp; Ankara, 2026</sub>
</p>
