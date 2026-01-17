# 🚗 Car Rental Booking App - Project Brief

Welcome to the **Car Rental Booking App**. A product which will help to manage your Car rental Business. An Erp kind of Application to understand How Projects are completed from scratch.

## 📝 Project Overview
This application serves as an Enterprise Resource Planning (ERP) tool for car rental businesses. It provides a centralized interface for operators to track vehicle availability and manage reservation lifecycles.

**Roles:** Super Admin

## 🛠 Tech Stack
- **Framework**: Angular 20 (Standalone Components)
- **Styling**: Vanilla CSS + Bootstrap 5.3
- **Icons**: Font Awesome 4.7
- **Typography**: Inter (Google Fonts)

---

## 📦 Modules
- **Login**: Secure access for the Super Admin.
- **Vehicle Creation**: Manage the fleet (Add, Edit, Delete vehicles).
- **Booking Creation**: Register new rental transactions.
- **Customer Master List**: View and manage customer profiles.
- **Booking List**: Track all historical and active bookings.
- **Dashboard**: High-level statistics and business overview.

---

## 🔗 APIs & Resources
- **API Endpoint**: [https://freeapi.miniprojectideas.com/index.html](https://freeapi.miniprojectideas.com/index.html)

Car Rental APIs

1. Create New Car
2. Get All Cars
3. Get Car By Id
4. Update Car
5. Delete Car
6. Get All Customers
7. Get Customer By Id
8. Update Customer
9. Delete Customer
10. Create New Booking
11. Get All Bookings
12. Get Booking By Id
13. Update Booking
14. Delete Booking
15. Get All Dashboard Data

---

## 🔐 Key Implementation Details

### 1. Hard-coded Login (Security Mockup)
In the initial development phase, we implemented a **Hard-coded Login** for the following reasons:
- **Use Case**: The app is built for a specific business owner/operator (Super Admin), not public registration.
- **Implementation**: The logic resides in `LoginComponent`. It verifies credentials against static strings instead of an API.
- **Logic Snippet**:
  ```typescript
  if (this.loginObj.userName == 'admin' && this.loginObj.password == "112233") {
    // Navigate to Dashboard
  }
  ```

### 2. Standalone Architecture
Following Angular 20 best practices, every page is a **Standalone Component**. This removes the need for `app.module.ts` and makes the project modular and lightweight.

### 3. Design System
- **Rich Aesthetics**: Uses custom gradients, glassmorphism on the login card, and shadow utilities for a premium feel.
- **Responsiveness**: Fully responsive layout using the Bootstrap Grid system.
- **Micro-Animations**: Key elements use CSS animations (`animate-up`, `fadeIn`) to improve user experience.

---

## 📂 Project Structure
- `src/app/pages/`: Contains all feature components (Login, Dashboard, Vehicles, etc.)
- `src/app/app.routes.ts`: Central routing configuration with child routes for the layout.
- `src/styles.css`: Global design tokens and font imports.

## 🚀 Getting Started
1. Run `npm install` to install dependencies.
2. Run `npm start` to launch the dev server.
3. Login using **admin / 112233**.
