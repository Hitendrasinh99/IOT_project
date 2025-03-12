import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
import joblib

# Function to load images and labels
def load_images(folder, label):
    images, labels = [], []
    for filename in os.listdir(folder):
        img_path = os.path.join(folder, filename)
        img = cv2.imread(img_path)
        if img is not None:
            img = cv2.resize(img, (128, 128)).flatten()
            images.append(img)
            labels.append(label)
    return images, labels

# Load dataset
wildfire_images, wildfire_labels = load_images("dataset/wildfire", 1)
no_wildfire_images, no_wildfire_labels = load_images("dataset/no_wildfire", 0)

# Balance dataset
min_count = min(len(wildfire_images), len(no_wildfire_images))
wildfire_images, wildfire_labels = wildfire_images[:min_count], wildfire_labels[:min_count]
no_wildfire_images, no_wildfire_labels = no_wildfire_images[:min_count], no_wildfire_labels[:min_count]

# Combine dataset
X = np.array(wildfire_images + no_wildfire_images) / 255.0  # Normalize
Y = np.array(wildfire_labels + no_wildfire_labels)

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Train an improved SVM model
model = SVC(kernel='rbf', probability=True, C=1.0, gamma='scale')
model.fit(X_train, Y_train)

# Save the trained model
joblib.dump(model, "backend/wildfire_model.pkl")
print("✅ Model trained & saved successfully!")
