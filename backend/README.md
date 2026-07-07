# Prescripto Backend

This is the Express API for Prescripto. It handles authentication, doctors, users, appointment booking, dashboard data, Cloudinary image upload, MongoDB storage, and Razorpay payment order verification.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Cloudinary
- Razorpay
- Validator
- CORS
- Dotenv

## Folder Structure

```text
backend/
├── config/        # MongoDB and Cloudinary configuration
├── controllers/   # Route controller logic
├── middlewares/   # Auth and upload middleware
├── models/        # Mongoose schemas
├── routes/        # Express route definitions
├── package.json
└── server.js      # API entry point
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

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

Notes:

- `MONGODB_URL` is used as `${MONGODB_URL}/prescripto` in the MongoDB config.
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` are used for admin login.
- `JWT_SECRET` signs user, admin, and doctor tokens.
- Cloudinary variables are required for doctor and user image uploads.
- Razorpay variables are required for appointment payment orders.

## Installation

```bash
cd backend
npm install
```

## Run Locally

Development with nodemon:

```bash
npm run server
```

Production-style start:

```bash
npm start
```

The API runs on:

```text
http://localhost:4000
```

Health check:

```text
GET /
```

Response:

```text
API WORKING
```

## API Routes

### Admin Routes

Base URL: `/api/admin`

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/login` | No | Admin login |
| `POST` | `/add-doctor` | Admin | Add doctor with image upload |
| `POST` | `/all-doctors` | Admin | Get all doctors |
| `POST` | `/change-availability` | Admin | Toggle doctor availability |
| `GET` | `/appointments` | Admin | Get all appointments |
| `POST` | `/cancel-appointment` | Admin | Cancel appointment |
| `GET` | `/dashboard` | Admin | Get admin dashboard data |

Admin token header:

```text
aToken: <admin_token>
```

### Doctor Routes

Base URL: `/api/doctor`

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/list` | No | Public doctor list |
| `POST` | `/login` | No | Doctor login |
| `GET` | `/appointments` | Doctor | Get doctor's appointments |
| `POST` | `/complete-appointment` | Doctor | Mark appointment completed |
| `POST` | `/cancel-appointment` | Doctor | Cancel appointment |
| `GET` | `/dashboard` | Doctor | Get doctor dashboard data |
| `GET` | `/profile` | Doctor | Get doctor profile |
| `POST` | `/update-profile` | Doctor | Update doctor profile |

Doctor token header:

```text
dToken: <doctor_token>
```

### User Routes

Base URL: `/api/user`

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/register` | No | Register user |
| `POST` | `/login` | No | Login user |
| `GET` | `/get-profile` | User | Get user profile |
| `POST` | `/update-profile` | User | Update user profile with optional image |
| `POST` | `/book-appointment` | User | Book an appointment |
| `GET` | `/appointments` | User | Get user appointments |
| `POST` | `/cancel-appointment` | User | Cancel appointment |
| `POST` | `/payment-razorpay` | User | Create Razorpay order |
| `POST` | `/verifyRazorpay` | User | Verify Razorpay payment |

User token header:

```text
token: <user_token>
```

## Scripts

```bash
npm start       # Run server.js with node
npm run server  # Run server.js with nodemon
npm test        # Placeholder test script
```

## Data Models

- `userModel` - user account and profile data
- `doctorModel` - doctor profile, fees, availability, and booked slots
- `appointmentModel` - appointment data, payment status, cancellation, and completion status
