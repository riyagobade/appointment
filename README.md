# Prescripto

Prescripto is a full-stack doctor appointment booking platform. It has three separate parts:

- `frontend` - patient-facing React app for browsing doctors, booking appointments, profile management, and Razorpay payment flow.
- `admin` - admin and doctor dashboard for managing doctors, appointments, availability, and doctor profiles.
- `backend` - Express API with MongoDB, JWT authentication, Cloudinary image upload, and Razorpay payment integration.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, React Router, Axios, React Toastify |
| Admin Panel | React, Vite, Tailwind CSS, React Router, Axios, React Toastify |
| Backend | Node.js, Express, MongoDB, Mongoose, JWT, Multer, Cloudinary, Razorpay |

## Project Structure

```text
prescripto/
├── admin/       # Admin and doctor dashboard
├── backend/     # REST API and database models
├── frontend/    # Patient-facing appointment booking app
└── README.md    # Project overview
```

## Prerequisites

- Node.js
- npm
- MongoDB connection string
- Cloudinary account
- Razorpay account

## Environment Variables

Create `.env` files inside the required folders.

Backend: `backend/.env`

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
```

Frontend: `frontend/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

Admin: `admin/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

## Installation

Install dependencies separately for each app.

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

```bash
cd admin
npm install
```

## Running Locally

Open three terminals and run each service.

Backend:

```bash
cd backend
npm run server
```

Frontend:

```bash
cd frontend
npm run dev
```

Admin panel:

```bash
cd admin
npm run dev
```

Default local URLs:

- Backend API: `http://localhost:4000`
- Frontend app: Vite will print the local URL, usually `http://localhost:5173`
- Admin panel: Vite will print the local URL, usually `http://localhost:5174` if frontend is already running

## Main Features

- Patient registration and login
- Doctor listing by speciality
- Appointment slot booking
- User profile update with image upload
- Appointment cancellation
- Razorpay payment order and verification flow
- Admin login
- Add doctors with profile image upload
- View all doctors and appointments
- Change doctor availability
- Doctor login
- Doctor dashboard, appointments, completion/cancellation, and profile update

## Available Scripts

Backend:

```bash
npm start       # Run backend with node
npm run server  # Run backend with nodemon
```

Frontend and admin:

```bash
npm run dev      # Start Vite dev server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Documentation

More details are available in each folder:

- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)
- [Admin README](admin/README.md)
