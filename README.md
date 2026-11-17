# 💳 Full-Stack E-Commerce Mini Store with Stripe Payment Gateway & Tailwind UI

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Stripe API](https://img.shields.io/badge/Stripe-Payment%20API-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A fully integrated, high-performance **Full-Stack E-Commerce Mini Store** featuring secure **Stripe Payment Gateway** session generation, multi-product catalog management, **Multer** server-side image uploading, and a modern, responsive dark-mode user interface designed with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Stripe Checkout Integration:** Generates dynamic Stripe checkout session URLs for secure payment processing.
* **Product Catalog REST API:** Dynamic endpoints fetching item stock, pricing, and details in real-time.
* **Multer File Uploads:** Configured middleware handling administrative product image uploads with secure disk storage.
* **Modern Tailwind UI:** A sleek dark-mode storefront layout providing instant feedback and redirect simulation links.
* **Clean Code Architecture:** Structured cleanly for scalability, modular maintenance, and enterprise deployment.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode component grid & checkout modals |
| **Backend Runtime** | Node.js & Express.js | REST API routing and static asset serving |
| **Payment Gateway** | Stripe SDK (`v17`) | Checkout session management & payment redirection |
| **File Handling** | Multer | Multipart form-data parsing and disk storage |

---

## 📂 Project Folder Structure

```text
commerce-stripe-backend/
├── public/
│   └── index.html             # Tailwind CSS modern storefront UI
├── uploads/                   # Destination folder for uploaded product images
├── src/
│   ├── routes/
│   │   └── paymentRoutes.js   # Products listing, Stripe session & upload logic
│   └── data/
│       └── store.js           # In-memory mock database store (products & orders)
├── server.js                  # Main entry point & static middleware binding
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
