from fastapi import FastAPI, File, UploadFile
from typing import List
import os
import shutil

app = FastAPI()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/analyze/")
async def analyze_images(files: List[UploadFile] = File(...)):
    saved_files = []
    for file in files:
        file_location = f"{UPLOAD_DIR}/{file.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        saved_files.append(file.filename)

    print(f"Received files: {saved_files}")  # Debugging line
    return {"message": "Files received", "filenames": saved_files}
