# Hassan E-Commerce Web Application

![Logo](/public/h1.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)

## Overview

This is a fully functional e-commerce web application built with **React.js**. The platform provides users with the ability to browse products, add them to a shopping cart, and complete the checkout process. Additionally, the application includes robust user authentication, order management, and a responsive admin panel for handling products and orders.

## Features

- **User Authentication**: Sign up, login, and logout functionality with JWT and Firebase authentication.
- **Product Catalog**: Searchable product listing with detailed product pages.
- **Shopping Cart**: Add, remove, and adjust quantities of products in the cart.
- **Checkout Process**: Streamlined checkout and order placement.
- **Order Management**: Users can view their order history and track order statuses.
- **Admin Dashboard**: Admins can manage products, orders, and users efficiently.
- **Responsive Design**: Mobile-first design optimized for all screen sizes.

## Technologies Used

- **Frontend**: React.js, React Router, Axios, TanStack Query
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS, DaisyUI
- **Pop-up Notifications**: SweetAlert2
- **Icons**: React Icons
- **Authentication**: JWT, Firebase

## Getting Started

To set up and run this project locally, follow these instructions:

### Prerequisites

Ensure that you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```

This will start the development server and the app will be available at `http://localhost:3000` by default.

## Project Structure

```plaintext
your-repository/
├── public/                # Static assets such as images and icons
├── src/
│   ├── assets/            # Media assets (e.g., images, icons)
│   ├── components/        # Reusable UI components
│   ├── Firebase/          # Firebase configuration
│   ├── hooks/             # Custom hooks for various functionalities
│   ├── layout/            # Main layout and structure
│   ├── pages/             # Pages of the application
│   ├── providers/         # Auth providers and context
│   ├── routes/            # Route handling for authenticated/admin pages
│   └── main.js            # Main entry point of the application
├── .env                   # Environment variables
├── index.html
├── package.json
└── tailwind.config.js     # Tailwind CSS configuration
```

## Screenshots

Here are some screenshots of the application:

### **Home Page**
![Home Page 1](/public/h1.png)
![Home Page 2](/public/h2.png)
![Home Page 3](/public/h3.png)

### **Shopping Page**
![Shopping Page 1](/public/s1.png)
![Shopping Page 2](/public/s2.png)

### **Order Page**
![Order Page 1](/public/o1.png)
![Order Page 2](/public/o2.png)

### **Authentication Pages**
- **Register**: ![Register](/public/r1.png)
- **Login**: ![Login](/public/r1.png)

### **Admin Dashboard**
- **Home**: ![Admin Home](/public/a1.png)
- **Add Products**: ![Admin Add Items](/public/a2.png)
- **Manage Products**: ![Admin Manage Products](/public/a3.png)
- **Manage Orders**: ![Admin Manage Orders](/public/a4.png)

## License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact

For any inquiries or feedback, feel free to reach out through the following channels:

- **Name**: Your Name
- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-linkedin)
- **Facebook**: [Your Facebook Profile](https://www.facebook.com/your-facebook)
```

