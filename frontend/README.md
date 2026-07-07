# Prescripto Frontend

This is the patient-facing React app for Prescripto. Users can browse doctors, filter by speciality, book appointment slots, manage their profile, view appointments, cancel bookings, and complete payment using Razorpay.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

## Features

- Home page with speciality menu and top doctors
- Doctor listing page
- Speciality-based doctor filtering
- Doctor appointment booking page
- User registration and login
- User profile view and update
- Profile image upload support through backend API
- My appointments page
- Appointment cancellation
- Razorpay payment flow
- Toast notifications for API feedback

## Folder Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/       # Images, icons, and static frontend assets
│   ├── components/   # Reusable UI components
│   ├── context/      # App-level context and API state
│   ├── pages/        # Route pages
│   ├── App.jsx       # Frontend routes
│   ├── index.css     # Tailwind and global styles
│   └── main.jsx      # React entry point
├── package.json
└── vite.config.js
```

## Environment Variables

Create a `.env` file inside the `frontend` folder.

```env
VITE_BACKEND_URL=http://localhost:4000
```

`VITE_BACKEND_URL` must point to the running backend API.

## Installation

```bash
cd frontend
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/doctors` | All doctors |
| `/doctors/:speciality` | Doctors filtered by speciality |
| `/appointment/:docId` | Book appointment with selected doctor |
| `/login` | User login and registration |
| `/my-profile` | User profile |
| `/my-appointments` | User appointments |
| `/about` | About page |
| `/contact` | Contact page |

## API Dependency

The frontend calls these backend route groups:

- `GET /api/doctor/list`
- `POST /api/user/register`
- `POST /api/user/login`
- `GET /api/user/get-profile`
- `POST /api/user/update-profile`
- `POST /api/user/book-appointment`
- `GET /api/user/appointments`
- `POST /api/user/cancel-appointment`
- `POST /api/user/payment-razorpay`
- `POST /api/user/verifyRazorpay`
