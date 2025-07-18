# 🎓 Student Registration Form – AWS Serverless Application

A responsive **Student Registration Form** hosted on **AWS S3**, connected to **API Gateway**, and powered by an **AWS Lambda function** that stores user data in a **MySQL database** on Amazon RDS.

---

## 🚀 Live Demo

🌐 [View the Form](https://your-s#-bucket/index.html)  
- *(Replace with your actual S3 URL)*
- *(Right now it is not working because it take some charges so if you want to deploy so it is the good way to deploy it)*

---

## 📋 Features

- Beautiful and responsive web form
- Form fields: Name, Roll No, Enroll No, Email, Phone
- Input validation using HTML5 attributes and patterns
- API Gateway triggers Lambda on submission
- Lambda function (with Layer) stores data in MySQL database
- Fully serverless architecture using AWS

---

## 🧱 Architecture

- +--------------------+
- | Static Website | <-- index.html hosted on Amazon S3  
- | (HTML + CSS Form) | 
- +--------------------+ 
- | 
- ▼
- +----------------------+
- | API Gateway | <-- Exposes a public REST API endpoint
- | (POST /submit-form) |
- +----------------------+
- |
- ▼
- +-----------------------------+
- | AWS Lambda | <-- Serverless backend (Python)
- | +---------------------+ |
- | | Lambda Layer (MySQL)| | <-- pymysql or MySQL connector
- +-----------------------------+
- |
- ▼
- +------------------------------+
- | Amazon RDS (MySQL DB) | <-- Stores form submissions
- +------------------------------+

## 👨‍💻 Author
- Ankit Singh
- GitHub: https://github.com/Ankitsingh88815
- Email: ankitsingh88815@gmail.com
- LinkedIn: linkedin.com/in/ankit-singh-87b277253
