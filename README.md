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