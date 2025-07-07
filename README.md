# CI Setup for Simple Node.js Application

This project is a full-stack web application that demonstrates how to set up a **Continuous Integration (CI) pipeline** for a Node.js backend with a React.js frontend and a MySQL database. It includes a sample CI setup using CircleCI to automate testing and deployment workflows.

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
│   ├── ...
├── .cirleci/                   # Circle CI configs
│   └── config.yml
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ranjan0369/personal-demo-app.git
cd personal-demo-app
````
### 2. Build the image

As soon as push is maid into the main branch a circleci pipeline is triggered which build and pushes the image to ECR.

DevOps & Cloud Enthusiast | MS in Cloud Computing
GitHub: [@ranjan039](https://github.com/ranjan0369)
