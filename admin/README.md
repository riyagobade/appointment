# Prescripto Admin Panel

This React app contains both the admin dashboard and the doctor dashboard for Prescripto. Admin users can manage doctors and appointments, while doctors can manage their own appointments, dashboard, and profile.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

## Features

Admin features:

- Admin login
- Dashboard with doctors, appointments, patients, and latest appointments
- Add new doctors with image upload
- View all appointments
- Cancel appointments
- View all doctors
- Change doctor availability

Doctor features:

- Doctor login
- Doctor dashboard with earnings, appointments, patients, and latest appointments
- View assigned appointments
- Mark appointments as completed
- Cancel appointments
- View and update doctor profile

## Folder Structure

```text
admin/
├── public/
├── src/
│   ├── assets/       # Icons and dashboard assets
│   ├── components/   # Navbar and sidebar
│   ├── context/      # Admin, doctor, and shared contexts
│   ├── pages/
│   │   ├── Admin/    # Admin dashboard pages
│   │   └── Doctor/   # Doctor dashboard pages
│   ├── App.jsx       # Protected dashboard routes
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Environment Variables

Create a `.env` file inside the `admin` folder.

```env
VITE_BACKEND_URL=http://localhost:4000
```

`VITE_BACKEND_URL` must point to the running backend API.

## Installation

```bash
cd admin
npm install
```

## Run Locally

```bash
npm run dev
```

If the frontend app is already running on `5173`, Vite usually starts this app on:

```text
http://localhost:5174
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

## App Routes

| Route | Access | Description |
| --- | --- | --- |
| `/` | Authenticated | Empty default route |
| `/admin-dashboard` | Admin | Admin dashboard |
| `/all-appointments` | Admin | All appointments |
| `/add-doctor` | Admin | Add doctor form |
| `/doctor-list` | Admin | Doctors list |
| `/doctor-dashboard` | Doctor | Doctor dashboard |
| `/doctor-appointments` | Doctor | Doctor appointments |
| `/doctor-profile` | Doctor | Doctor profile |

## API Dependency

The admin panel calls these backend route groups:

- `POST /api/admin/login`
- `POST /api/admin/add-doctor`
- `POST /api/admin/all-doctors`
- `POST /api/admin/change-availability`
- `GET /api/admin/appointments`
- `POST /api/admin/cancel-appointment`
- `GET /api/admin/dashboard`
- `POST /api/doctor/login`
- `GET /api/doctor/appointments`
- `POST /api/doctor/complete-appointment`
- `POST /api/doctor/cancel-appointment`
- `GET /api/doctor/dashboard`
- `GET /api/doctor/profile`
- `POST /api/doctor/update-profile`
