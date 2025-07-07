### 📄 `README.md`

```markdown
# CI Setup for Simple Node.js Application

This project is a full-stack web application that demonstrates how to set up a **Continuous Integration (CI) pipeline** for a Node.js backend with a React.js frontend and a MySQL database. It includes a sample CI setup using GitHub Actions to automate testing and deployment workflows.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **CI/CD**: CircleCI

---

## ✨ Features

- Simple user authentication (Login/Signup)
- RESTful API structure
- React-based UI with routing
- CI pipeline using CircleCI:
  - Automated build and deploy steps

---

## 📁 Project Structure

```

├── app-frontend/                 # React frontend
│   └── ...
├── login-api/                 # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
├── .cirleci/# GitHub Actions CI configs
│   └── config.yml
├── .env                   # Environment variables
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ranjan0369/personal-demo-app.git
cd personal-demo-app
````

### 2. Set Up Environment Variables

Create a `.env` file in the `server` folder with the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
PORT=5000
```

### 3. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```
---

## ⚙️ CI/CD Setup

A CircleCI configuration (config.yml) is defined to run on every push and pull request.

DevOps & Cloud Enthusiast | MS in Cloud Computing
GitHub: [@ranjan039](https://github.com/ranjan0369)
