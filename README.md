

# Unixchange

## Full-Stack E-Commerce Web Application

A production-style full-stack e-commerce web application built using **React.js and Firebase**, featuring authentication, product catalog management, cart workflows, and secure payment integration using Stripe (test mode).

This project demonstrates real-world full-stack engineering skills including:

* Frontend architecture using React
* Cloud backend integration with Firebase
* Secure authentication workflows
* NoSQL data modeling
* Stripe payment API integration
* Environment-based secure configuration

---

## 🔎 Project Overview

Unixchange is a modern web-based e-commerce platform that simulates a real online retail system.

The application supports:

* User authentication and profile management
* Dynamic product catalog with search and category filters
* Cart state management
* Secure checkout using Stripe
* Cloud-hosted database and storage

The system leverages Firebase as a backend-as-a-service to manage authentication, Firestore database operations, file storage, and hosting.

---

## 🏗 System Architecture

```text
Client (React.js)
        │
        ▼
Firebase Authentication
        │
        ▼
Firestore Database
        │
        ▼
Firebase Storage
        │
        ▼
Stripe API (Secure Payment - Test Mode)
```

---

## ⚙️ Engineering Highlights

### Authentication & Authorization

* Email/password authentication using Firebase Auth
* Protected routes for checkout and user-specific operations
* Persistent session management

### Database Design

* Firestore collections structured for products, users, and cart state
* Controlled write access for secure operations
* Real-time updates using Firebase capabilities

### Payment Integration

* Stripe API (test mode) integration
* Secure publishable key configuration via environment variables
* Error handling for failed payments
* Checkout validation to prevent invalid transactions

### State Management

* Controlled React component state
* Cart consistency across re-renders
* Real-time price calculation and validation

### Security Practices

* Stripe keys handled through environment variables
* Conditional access to product operations
* Firebase security rules implementation
* Avoided exposing sensitive credentials

---

# E-commerce Web App

An e-commerce web app as a personal project of mine. This is the first version of the project. It is open source so you can contribute to this project.

---

## 🛠 Tech Stack Used

* React JS
* Firebase Web [ Firestore, Realtime Database, Authentication, Storage, Hosting ]
* Stripe API (Test Mode)
* Analysis - Deepsource

---

## 📸 Application Screenshots

![Screenshot from 2023-07-30 00-16-22](https://github.com/shrey802/unixchange/assets/55155180/5be17765-c817-41b6-bf30-2ea67ddf2a0a)
![Screenshot from 2023-07-30 00-16-27](https://github.com/shrey802/unixchange/assets/55155180/aced8064-78c5-4874-b081-41666c678be1)
![Screenshot from 2023-07-30 00-16-48](https://github.com/shrey802/unixchange/assets/55155180/9485bdb4-e89e-4962-9a44-61f8d2c0d426)
![Screenshot from 2023-07-30 00-17-33](https://github.com/shrey802/unixchange/assets/55155180/8b60b975-0927-406b-a6a0-e524a5f706db)
![Screenshot from 2023-07-30 00-17-42](https://github.com/shrey802/unixchange/assets/55155180/88c5d113-e102-4412-b5e9-e2c1506bc773)
![Screenshot from 2023-07-30 00-18-16](https://github.com/shrey802/unixchange/assets/55155180/e39f02ce-2ec7-4091-a233-6442c3e4006e)
![Screenshot from 2023-07-30 00-18-27](https://github.com/shrey802/unixchange/assets/55155180/48c47c82-7337-4fcb-8888-f713de49caee)
![Screenshot from 2023-07-30 00-18-31](https://github.com/shrey802/unixchange/assets/55155180/c390523f-79fc-421e-9cf3-d7fdbc0ad5dd)
![Screenshot from 2023-07-30 00-18-42](https://github.com/shrey802/unixchange/assets/55155180/038f2329-0598-41b6-aa8c-5b4d8aba7660)

---

## ✨ Features

* Profile
* Authentication (email & password)
* Products
* Conditional access to operations on products
* Payment method (card)
* Search products by name and filter products using category
* Cart Management
* Access Individual Products
* Send Queries
* Encrypts the Stripe keys

---

## 💡 Ideas?

Put it in the discussions of the repository.

---

## 🚀 To Start Contributing

1. Create a new project in Firebase
2. Get the credentials
3. Fork the repository
4. Clone the repository
5. Perform `npm i`
6. Perform `npm i dotenv`
7. Create a `.env` file in the root directory
8. Store all the Firebase credentials in the dotenv file with the prefix `VITE`
9. Create a sandbox account on Stripe
10. Get the publishable key and secret key
11. Store the publishable key in `.env`

---

## 📚 Reference

* [Firebase Setup](https://youtu.be/rQvOAnNvcNQ)
* [Stripe](https://stripe.com/en-in)

---

## 🎥 Demo Video

[https://drive.google.com/file/d/1DXl7YaLwqr7R2u7TM-qfR2__TzYCICHM/view?usp=sharing](https://drive.google.com/file/d/1DXl7YaLwqr7R2u7TM-qfR2__TzYCICHM/view?usp=sharing)

---

## 👨‍💻 Author

Atharva Thorat
Master’s in Computer Science – University of Southern California
Focused on scalable full-stack systems, backend engineering, and AI-integrated applications.

