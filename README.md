# Mkpong AI FinApp 💰

An **AI-powered financial management SaaS dashboard** built for business owners to track purchases, sales income, and gain deep financial insights — powered by Google Gemini AI.

---

## ✨ Features

- 🔐 **Authentication** — Secure JWT-based login & registration
- 📊 **Dashboard** — Real-time financial overview with charts & KPIs
- 💳 **Transaction Management** — Log income and expenses with ease
- 🗂️ **Smart Categorization** — AI-driven automated category assignment
- 🧾 **OCR Receipt Scanning** — Upload receipts and extract data automatically
- 🤖 **AI Insights** — Gemini-powered financial analysis and recommendations
- 📈 **Reports & Analytics** — Visual breakdowns of your financial health

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, Tailwind CSS |
| Backend | Node.js, Express |
| Database | SQLite |
| AI | Google Gemini API |
| Auth | JWT |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A [Google Gemini API Key](https://makersuite.google.com/app/apikey)

### 1. Clone the repository
```bash
git clone https://github.com/Doopra/Mkpong-Ai-FInApp.git
cd Mkpong-Ai-FInApp
```

### 2. Set up the Backend
```bash
cd backend
cp .env.example .env
# Edit .env and fill in your values
npm install
npm start
```

### 3. Set up the Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Open in browser
```
http://localhost:3000
```

---

## ⚙️ Environment Variables

Create a `backend/.env` file based on `backend/.env.example`:

```env
PORT=5000
JWT_SECRET=your_strong_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📁 Project Structure

```
Mkpong-Ai-FInApp/
├── backend/
│   ├── routes/          # API routes (auth, transactions, insights)
│   ├── middleware/      # Auth middleware
│   ├── database.js      # SQLite setup
│   ├── server.js        # Express server
│   └── .env.example     # Environment template
└── frontend/
    ├── src/app/         # Next.js app router pages
    ├── src/components/  # Reusable UI components
    └── public/          # Static assets
```

---

## 📄 License

MIT License © 2026 Doopra
