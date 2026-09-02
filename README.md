# QurbaniHat — Livestock Booking Platform

**Category:** A8-Pineapple
**Purpose:** A livestock marketplace where users can browse cows and goats for Qurbani, view full details, and place a booking after logging in.

**Live URL:** _(add after deployment)_
**Backend URL:** _(add after deployment)_

## Key Features

- Browse all animals with sort-by-price
- Home page with hero, featured animals, Qurbani Tips, Top Breeds, and Testimonials
- Full animal details page with a booking form (name, email, phone, address) — login required
- Email/Password authentication + Google social login, powered by **better-auth**
- My Profile page + Update Information (name & photo) via better-auth's update-user
- Fully responsive (mobile / tablet / desktop)
- Toast notifications, loading states, and a custom 404 page
- Animate.css for entrance animations

## Tech Stack

**Frontend:** React (Vite), React Router, Tailwind CSS v4, react-hook-form, react-hot-toast, animate.css, better-auth (React client)
**Backend:** Node.js, Express, MongoDB (Atlas), better-auth (server)

## npm Packages Used

- `better-auth` — authentication (email/password + Google), used on both frontend and backend
- `react-hook-form` — booking, login, register, and update forms
- `react-hot-toast` — success/error toast notifications
- `animate.css` — entrance animations on cards and sections
- `react-router-dom` — client-side routing

## Project Structure

```
qurbanihat/
├── backend/          # Express API + better-auth + MongoDB
│   ├── auth.js
│   ├── server.js
│   ├── routes/animals.js
│   └── data/animals.json
└── frontend/         # React (Vite) app
    └── src/
        ├── components/  (Navbar, Footer, AnimalCard, PrivateRoute, Testimonials)
        ├── pages/       (Home, AllAnimals, AnimalDetails, Login, Register, MyProfile, UpdateInfo, NotFound)
        └── lib/         (auth-client.js, api.js)
```

## Local Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in your MongoDB URI, better-auth secret, Google client id/secret
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5000`.

## Environment Variables

**backend/.env**
```
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:5000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLIENT_URL=http://localhost:5173
PORT=5000
```

**frontend/.env**
```
VITE_API_URL=http://localhost:5000
```

## Deployment

- **Backend:** Render or Railway (Node service). Set the same environment variables in the dashboard, and update `CLIENT_URL` to the deployed frontend URL, and add the production Google OAuth redirect URI.
- **Frontend:** Vercel. `vercel.json` is already included to prevent 404s on page reload for client-side routes. Set `VITE_API_URL` to the deployed backend URL.

## Routes

**Public:** `/`, `/animals`, `/login`, `/register`
**Private:** `/details-page/:id`, `/my-profile`, `/my-profile/update`

## Submission

- GitHub link: _(add yours)_
- Live site link: _(add yours)_
