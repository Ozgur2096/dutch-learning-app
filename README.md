https://www.npmjs.com/package/dictionary-nl#what-is-this
https://en.wiki.tatoeba.org/articles/show/api

client/
├── public/
│   └── favicon.svg / robots.txt / etc.
├── src/
│   ├── assets/              # Static images, icons, fonts
│   ├── components/          # Reusable UI components (e.g., Button, Card, Header)
│   ├── pages/               # Page components (e.g., Home, Login, Dashboard)
│   ├── routes/              # Route definitions and layout components
│   ├── services/            # API logic (e.g., Tatoeba, dictionary-nl)
│   ├── hooks/               # Custom hooks (e.g., useAuth, useFetch)
│   ├── context/             # React context (e.g., AuthContext)
│   ├── utils/               # Utility functions (e.g., validators, helpers)
│   ├── styles/              # Global CSS, Tailwind config, etc.
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React DOM render
│   └── index.css            # Base styling
├── .env                    # Vite env variables (VITE_API_URL, etc.)
├── vite.config.js          # Vite config
├── package.json
└── README.md

server/
├── src/
│   ├── config/              # Configuration (e.g., DB connection, env loader)
│   │   └── db.js
│   │   └── dotenv.js
│   ├── controllers/         # Route logic (e.g., authController, wordController)
│   ├── routes/              # Express routes
│   ├── models/              # Mongoose/DB models
│   ├── middleware/          # Custom middleware (e.g., auth, errorHandler)
│   ├── services/            # External APIs (e.g., Tatoeba, Dictionary)
│   ├── utils/               # Helper functions (e.g., token generation)
│   ├── server.js            # App entry point
│   └── app.js               # Express setup (middlewares, routes)
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md

# 🇳🇱 Dutch Learning App

A full-stack language learning app to help users practice and learn Dutch vocabulary and sentences. Built with:

- 🔥 Frontend: React + Vite
- 🌐 Backend: Node.js + Express
- 🧠 Database: MongoDB
- 🔐 Features: Authentication, cookies, Tatoeba & dictionary-nl integration

---

## 📁 Folder Structure

### `client/` (React + Vite)
client/ ├── public/ # Static files ├── src/ │ ├── assets/ # Images, icons, etc. │ ├── components/ # Reusable components (Button, Header, etc.) │ ├── pages/ # Page views (Home, Login, Dashboard) │ ├── routes/ # Route definitions │ ├── services/ # Tatoeba & Dictionary API handlers │ ├── hooks/ # Custom React hooks │ ├── context/ # Global state (AuthContext, etc.) │ ├── utils/ # Helper functions │ ├── styles/ # CSS or Tailwind configs │ ├── App.jsx │ ├── main.jsx │ └── index.css


### `server/` (Node.js + Express)

server/ ├── src/ │ ├── config/ # DB & env setup │ ├── controllers/ # API route logic │ ├── routes/ # Express route definitions │ ├── models/ # Mongoose models │ ├── middleware/ # Auth, error handlers │ ├── services/ # External APIs (Tatoeba, Dictionary-nl) │ ├── utils/ # Token generator, etc. │ ├── app.js # Express app setup │ └── server.js # Entry point

---

## 🔗 External APIs

- [📚 dictionary-nl (NPM)](https://www.npmjs.com/package/dictionary-nl) – Dutch word dictionary (via `nlindex`)
- [🗣️ Tatoeba API](https://en.wiki.tatoeba.org/articles/show/api) – Sentence pairs and translations

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dutch-learning-app.git
cd dutch-learning-app
