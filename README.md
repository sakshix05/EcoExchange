# EcoExchange - Community Reuse Platform

This project is a minimal MERN-style application for the CodeXcelerate internship task.
It implements the core features required in the assignment:
- POST /api/items - add new item
- GET /api/items - fetch all items
- PUT /api/items/:id - update item status (available/exchanged)

## Project structure
- backend/ - Express server, routes, and models
- frontend/ - Vite + React + Tailwind UI

## Setup (as in PDF instructions)
1. Start a MongoDB instance or use MongoDB Atlas. Copy the connection string.

### Backend
```
cd backend
npm install
cp .env.example .env
# edit .env and add MONGO_URI
npm run dev   # requires nodemon or use npm start
```

### Frontend
```
cd frontend
npm install
npm run dev
```

API base (frontend expects): http://localhost:5000/api

## Submission
- Create a public GitHub repo with both backend and frontend folders.
- Include screenshots and this README.
- (Optional) Deploy frontend to Vercel/Netlify and backend to Render.

Good luck! ♻️
