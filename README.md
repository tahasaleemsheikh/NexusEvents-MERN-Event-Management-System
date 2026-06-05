<div align="center">

# 🎉 NexusEvents

### Event Management System – MERN Stack

A modern full-stack Event Management System built using **MongoDB, Express.js, React.js, and Node.js** that enables users to create, manage, and discover events through an intuitive and responsive web interface.

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react)]()
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)]()
[![Express](https://img.shields.io/badge/Framework-Express.js-000000?logo=express)]()
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)]()
[![License](https://img.shields.io/badge/License-Academic-blue)]()

</div>

---

## 📖 Overview

**NexusEvents** is a full-stack Event Management System developed as part of a Web Programming (MERN Stack) semester project.

The platform provides a centralized solution for event management where organizers can publish events and users can browse upcoming events with detailed information. The application follows modern web development practices and demonstrates complete frontend-backend integration using the MERN stack.

---

## ✨ Features

### 🎯 Event Management
- Create new events
- View all upcoming events
- Display detailed event information
- Update existing events
- Delete events

### 🎨 User Experience
- Responsive design for all devices
- Modern card-based event layout
- Dedicated event details page
- Sticky navigation bar
- Loading indicators
- User-friendly error handling
- Dynamic event images

### ⚡ Backend Features
- RESTful API architecture
- Full CRUD functionality
- MongoDB database integration
- Data validation using Mongoose
- Error handling middleware
- Cross-Origin Resource Sharing (CORS)

---

## 🏗️ System Architecture

```text
┌─────────────────────────┐
│      React Frontend     │
│    React Bootstrap UI   │
└────────────┬────────────┘
             │ HTTP Requests (Axios)
             ▼
┌─────────────────────────┐
│   Express REST API      │
│       Node.js           │
└────────────┬────────────┘
             │ Mongoose ODM
             ▼
┌─────────────────────────┐
│       MongoDB           │
│      Database Layer     │
└─────────────────────────┘
```

---

## 🚀 Technology Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| React Router DOM | Client-side Routing |
| React Bootstrap | Responsive Components |
| Axios | API Communication |
| React Icons | UI Icons |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| dotenv | Environment Variables |
| CORS | Cross-Origin Requests |

---

## 📂 Project Structure

```text
NexusEvents-MERN-Event-Management-System
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── eventController.js
│   │
│   ├── models
│   │   └── Event.js
│   │
│   ├── routes
│   │   └── eventRoutes.js
│   │
│   ├── .env
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── NavbarComponent.js
│   │   │   ├── Footer.js
│   │   │   └── EventCard.js
│   │   │
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── CreateEvent.js
│   │   │   └── EventDetails.js
│   │   │
│   │   ├── App.js
│   │   └── main.jsx
│   │
│   └── public
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/tahasaleemsheikh/NexusEvents-MERN-Event-Management-System.git

cd NexusEvents-MERN-Event-Management-System
```

---

### 2️⃣ Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm start
```

Server will run on:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application will run on:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

### Event Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/api/events` | Get all events |
| GET | `/api/events/:id` | Get single event |
| POST | `/api/events` | Create event |
| PUT | `/api/events/:id` | Update event |
| DELETE | `/api/events/:id` | Delete event |

---

## 🗄️ Database Schema

### Event Model

```javascript
{
  title: String,
  description: String,
  date: Date,
  time: String,
  location: String,
  imageUrl: String,
  organizer: String,
  price: Number,
  createdAt: Date
}
```

---

## 🎯 Project Objectives

- Develop a complete MERN stack application
- Implement RESTful API architecture
- Integrate MongoDB using Mongoose
- Build reusable React components
- Practice frontend-backend communication
- Follow industry-standard project structure
- Gain hands-on experience with full-stack development

---

## 🧪 Testing

The application was manually tested for:

✅ Event Creation

✅ Event Retrieval

✅ Event Update

✅ Event Deletion

✅ Form Validation

✅ API Response Handling

✅ Error Management

✅ Responsive Layout

✅ Client-side Navigation

All CRUD functionalities were successfully verified.

---

## 📈 Future Enhancements

- JWT Authentication & Authorization
- User Registration & Login
- Role-Based Access Control
- Ticket Booking System
- Online Payment Integration
- Search & Filter Events
- Admin Dashboard
- Event Analytics
- Email Notifications
- Cloudinary Image Uploads
- Reviews & Ratings System

---

## 👨‍💻 Development Team

| Roll Number | Name | Role |
|------------|------|------|
| F230822 | Nehza | Frontend Developer |
| F230829 | Khadija Younas | Backend Developer |
| F230573 | Ghulam Dastageer | Database & API Integration |
| F230517 | Taha Saleem | Full Stack Developer & Documentation |

---

## 🎓 Academic Information

**Course:** Web Programming (MERN Stack)

**Department:** Computer Science

**Institution:** FAST National University of Computer and Emerging Sciences (FAST-NUCES)

**Project Type:** Semester Project

---

## 🔗 Repository

GitHub Repository:

https://github.com/tahasaleemsheikh/NexusEvents-MERN-Event-Management-System

---

## 📜 License

This project was developed for educational and academic purposes.

---

<div align="center">

### ⭐ If you found this project helpful, please consider starring the repository.

**Built with ❤️ using the MERN Stack**

</div>
