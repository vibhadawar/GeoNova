# 🌍 GeoSense AI

GeoSense AI is an AI-powered Earth Observation System that analyzes satellite imagery using Computer Vision and Machine Learning techniques.

The platform enables users to upload satellite images, perform land-cover analysis, detect environmental changes, generate reports, and visualize results through an interactive dashboard.

---

## 🚀 Features

### 🔐 Authentication
- Firebase Authentication
- User Signup
- User Login
- Protected Routes
- Secure Logout

### 🛰 Satellite Image Analysis
- Upload Satellite Images
- Image Segmentation
- Vegetation Detection
- Water Body Detection
- Urban Area Detection

### 📊 Interactive Dashboard
- Land Cover Statistics
- Progress Bars
- Pie Chart Visualization
- AI Generated Analysis Report

### 🔍 Change Detection
- Compare Two Satellite Images
- Vegetation Change Analysis
- Water Change Analysis
- Urbanization Change Analysis
- Change Heatmap Generation

### 🎨 Modern UI
- Responsive Design
- Dark Mode Support
- Professional Dashboard Layout
- Smooth Animations

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Recharts
- React Router DOM

### Backend
- FastAPI
- OpenCV
- NumPy
- Pillow

### Authentication
- Firebase Authentication

### Mapping & Geospatial
- Leaflet
- GeoJSON

---

## 📂 Project Structure

```text
EarthObservationSystemm
│
├── backend
│   ├── main.py
│   ├── routes
│   ├── models
│   ├── outputs
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── firebase.js
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── images
├── models
├── vegetation.geojson
├── README.md
└── .gitignore
```

---

## ⚙ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/GeoSenseAI.git
```

```bash
cd GeoSenseAI
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv myenv
```

Activate virtual environment:

### Windows

```bash
myenv\Scripts\activate
```

### Linux / Mac

```bash
source myenv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

## 📸 Screenshots

### Login Page
Firebase Authentication

### Dashboard
Satellite Image Analysis Dashboard

### Land Cover Statistics
Vegetation, Water and Urban Area Detection

### Change Detection
Comparison of Multi-Temporal Satellite Images

### Heatmap Visualization
Environmental Change Monitoring

---

## 🔮 Future Enhancements

- Analysis History
- PDF Report Export
- Satellite Basemaps
- Time Series Analysis
- Cloud Deployment
- Machine Learning Prediction Models

---

## 👨‍💻 Author

Developed by Vibha

GeoSense AI — Earth Observation Intelligence System