# Cruise Booking Website [![wakatime](https://wakatime.com/badge/user/2bb32853-0b93-42b8-a9f0-93ab459b519b/project/018f06f0-8f49-48b9-8809-22fe77499a98.svg)](https://wakatime.com/badge/user/2bb32853-0b93-42b8-a9f0-93ab459b519b/project/018f06f0-8f49-48b9-8809-22fe77499a98)

## Introduction

The Cruise Booking Website is a comprehensive web application designed for users to book and manage cruise trips. It provides an intuitive interface for users to browse available cruises, make bookings, and manage their profiles. The backend handles user authentication, booking management, and other server-side operations, while the frontend provides a seamless user experience.

## Table of Contents

-   [Introduction](#introduction)
-   [Table of Contents](#table-of-contents)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation Instructions](#installation-instructions)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Contribution Guidelines](#contribution-guidelines)
-   [License](#license)
-   [Contact Information](#contact-information)

## Features

-   User Authentication: Signup, login, and profile management.
-   Cruise Booking: Browse available cruises and make bookings.
-   Booking Management: View and manage existing bookings.
-   QR Code Generation: Generate and display QR codes for bookings.
-   Responsive Design: Mobile-friendly interface.

## Technologies Used

-   **Backend:** Node.js, Express.js
-   **Frontend:** React, Vite, Tailwind CSS
-   **Database:** MongoDB (assumed from model files)
-   **Authentication:** JWT, bcrypt (assumed from session and user models)

## Installation Instructions

### Prerequisites

-   Node.js (v14 or later)
-   npm (v6 or later)
-   MongoDB (or any other database you are using)

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables:

    - Copy the `.env.example` file to `.env` and update the values accordingly.

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage

1. Start the backend server as described in the backend setup.
2. Start the frontend development server as described in the frontend setup.
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

```
Cruise-Booking-Website-main/
├── backend/
│   ├── api/
│   │   └── index.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── routes/
│   ├── services/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── utilities/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact Information

For inquiries, please contact [theprinceraj](https://github.com/theprinceraj).
