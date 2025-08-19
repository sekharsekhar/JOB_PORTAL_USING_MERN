# JOB-PORTAL

Empowering Careers. Connecting Talent. Streamlining Recruitment.

---

## Table of Contents

* [Overview](#overview)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Usage](#usage)

---

## Overview

JOB-PORTAL is a full-stack recruitment platform that bridges the gap between job seekers and employers. It provides secure authentication, intuitive job postings, and efficient application tracking, all within a responsive and user-friendly interface.

[![Live Site](https://img.shields.io/badge/Visit%20Site-Job%20Portal-blue?style=for-the-badge)](https://your-deployment-url.com)

---

### Why JOB-PORTAL?

This project simplifies the hiring process by offering:

* 👤 **Multi-Role System**: Supports both Job Seekers and Recruiters.  
* 🔐 **Secure Authentication**: JWT-based authentication with `httpOnly` cookies.  
* 🏢 **Company Profiles**: Employers can manage company details and job postings.  
* 💼 **Job Management**: Create, edit, and delete job listings easily.  
* 📄 **Resume Upload**: Integrated with Cloudinary for secure file storage.  
* 📊 **Application Tracking**: Monitor job applications and update statuses.  
* 🎯 **Search & Filter**: Locate jobs by location, category, or salary.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

---

### Prerequisites

This project requires the following:

* **Node.js** (v16+)
* **npm**
* **MongoDB** (Atlas)
* **Cloudinary** account

---

### Installation

Build JOB-PORTAL from source and install dependencies:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/job-portal.git
    ```

2. **Backend setup**:

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in `backend/`:

    ```env
    MONGO_URI=your_mongodb_connection_string
    SECRET_KEY=your_jwt_secret
    CLOUD_NAME=your_cloudinary_name
    API_KEY=your_cloudinary_api_key
    API_SECRET=your_cloudinary_api_secret
    PORT=8000
    ```

3. **Frontend setup**:

    ```bash
    cd ../frontend
    npm install
    ```

---

### Usage

**Run Backend**:

```bash
cd backend
npm run dev
```
SCREEN SHOTS
```
![Login page](https://github.com/sekharsekhar/JOB_PORTAL_USING_MERN/blob/main/Screenshot%202025-08-19%20123209.png?raw=true)
