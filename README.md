# IOT_project
# IoT Dashboard for Wildfire Detection

## Project Overview
The **IoT Dashboard for Wildfire Detection** is a web-based application that allows users to upload satellite images, analyze them using a machine learning model hosted on a **FastAPI backend**, and view detection results. The system aims to identify wildfire occurrences based on uploaded images and provide predictions on whether a wildfire is present or not.

## Features
- **Upload Images:** Users can upload multiple satellite images via the frontend.
- **Analyze Images:** The system sends images to a FastAPI backend for analysis.
- **View Results:** The results of the analysis, including wildfire detection, are displayed alongside the corresponding images.
- **User-Friendly UI:** Built using React.js for seamless interaction.
- **Machine Learning Model:** A trained model predicts wildfire presence based on image data.

---

## Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (for React frontend)
- **Python 3.x** (for FastAPI backend)
- **pip** (for managing Python dependencies)
- **Git** (for version control)

### **Clone the Repository**
```sh
 git clone https://github.com/your-repo/iot-wildfire-dashboard.git
 cd iot-wildfire-dashboard
```

### **Backend Setup (FastAPI Server)**

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # Mac/Linux
   venv\Scripts\activate  # Windows
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Start the FastAPI server:
   ```sh
   uvicorn backend.app:app --reload
   ```
5. The API will be available at: **http://127.0.0.1:8000**
   - Check API documentation: **http://127.0.0.1:8000/docs**

### **Frontend Setup (React Application)**

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
4. Open your browser and visit **http://localhost:3000**

---

## Usage Guide
### **Use Case 1: Upload Images**
1. Click on **Live Satellite Images** tab.
2. Click **Choose Files** and select satellite images.
3. Selected images will be previewed on the screen.

### **Use Case 2: Analyze Images**
1. Navigate to the **Image Analysis** tab.
2. Click **Analyze Images**.
3. The application will send images to the backend for analysis.

### **Use Case 3: View Results**
1. Navigate to the **Wildfire Detection** tab.
2. The results will display each image along with its prediction (e.g., **Wildfire** or **No Wildfire**).

---

## API Endpoints (FastAPI)
### **POST /analyze/**
- **Description:** Uploads an image and returns a wildfire prediction.
- **Request:** Multipart form-data with an image file.
- **Response:** JSON with `prediction` field ("Wildfire" or "No Wildfire").

---

## Project Limitations & Future Improvements
### **Current Limitations**
- Model accuracy depends on the quality and diversity of training data.
- No real-time data streaming; analysis is done on static images.
- The system does not yet support live API feeds from satellites.

### **Potential Enhancements**
- Integration with real-time satellite image APIs (e.g., NASA or Google Earth Engine).
- Implementing a feedback loop to improve model accuracy.
- Adding user authentication for secure access.
- Deploying on cloud infrastructure for scalability.

---

## Contribution
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```sh
   git commit -m "Added new feature"
   ```
4. Push to GitHub:
   ```sh
   git push origin feature-branch
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For issues or inquiries, please contact:
- **Email:** hc883@drexel.edu


