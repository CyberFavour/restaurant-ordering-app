# Restaurant Ordering Web Application

This project is a cloud‑based restaurant ordering system developed as part of a university assignment on digital transformation and cloud computing. The system demonstrates secure authentication, role‑based access control, menu management, order processing, and deployment using modern cloud technologies.

---

## 1. Overview

The application allows customers to browse menu items and place orders, while administrators can manage menu content and view incoming orders. The system integrates both SQL and NoSQL storage, cloud‑based authentication, and PaaS deployment to demonstrate scalable, industry‑aligned architecture.

---

## 2. Key Features

### Customer Functionality
- User registration and login via Firebase Authentication  
- Menu browsing  
- Order placement  
- Order confirmation  

### Administrator Functionality
- Admin role assigned using Firebase Admin SDK  
- Add, edit, and delete menu items  
- View all customer orders  
- Access to protected admin dashboard  

### Cloud and System Features
- Firestore NoSQL database for menu and orders  
- SQLite for local development  
- Deployment on Google App Engine  
- Secure handling of service account credentials  
- Separation of concerns between Python backend and Node.js admin utilities  

---

## 3. Technologies Used

### Backend (Python)
- Flask  
- Firebase Admin SDK (Python)  
- Google Cloud Firestore  
- SQLite (local testing)  
- Gunicorn (for App Engine deployment)

### Backend Utility (Node.js)
- Firebase Admin SDK (Node.js) for assigning admin roles

### Frontend
- HTML, CSS, JavaScript  
- Jinja2 templating

### Cloud Services
- Firebase Authentication  
- Google Cloud Firestore  
- Google App Engine  
- Google Cloud Console  

---

## 4. Project Structure

resturant-ordering-app/
│
├── backend/
│   ├── app.py
│   ├── firestore.py
│   ├── models.py
│   ├── setAdmin.js
│   ├── templates/
│   ├── static/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── venv/ (ignored)
│   └── requirements.txt
│
├── package.json
├── package-lock.json
├── .gitignore
├── README.md

---

## 5. Installation and Setup

### Python Backend
1. Navigate to the backend folder:
cd backend

2. Install dependencies:
pip install -r requirements.txt

3. Run the application:
python app.py


### Admin Role Assignment (Node.js)
1. Install Node dependencies:
npm install

2. Assign admin role:
node setAdmin.js

---

## 6. Deployment (Google App Engine)

1. Ensure `app.yaml` is configured correctly  
2. Update `requirements.txt` using:
pip freeze > requirements.txt

3. Deploy:
gcloud app deploy 

4. Access the deployed application via the URL provided by Google Cloud

---

## 7. Security Considerations

- Firebase service account key is excluded using `.gitignore`  
- Virtual environment and `node_modules` are not committed  
- No sensitive credentials are stored in the repository  
- Role‑based access control prevents unauthorized admin access  

---

## 8. Coursework Context

This project demonstrates:
- Cloud‑based system design  
- Authentication and authorization  
- NoSQL database modelling  
- API integration  
- Deployment to a PaaS environment  
- Full‑stack development aligned with digital transformation principles  

The implementation aligns with academic marking criteria, including security, scalability, documentation, and technical correctness.

---

## 9. Author

Favour  
Bournemouth University  
Information Technology Management 

