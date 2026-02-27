import torch
import torch.nn as nn
import torchvision.models as models
from torchvision import transforms
from fastapi import FastAPI, UploadFile, File
from PIL import Image
import io

# =========================
# Device
# =========================
device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")

# =========================
# Classes
# =========================
classes = ['Bangus', 'Big Head Carp', 'Black Spotted Barb', 'Catfish',
'Climbing Perch', 'Fourfinger Threadfin', 'Freshwater Eel',
'Glass Perchlet', 'Goby', 'Gold Fish', 'Gourami', 'Grass Carp',
'Green Spotted Puffer', 'Indian Carp', 'Indo-Pacific Tarpon',
'Jaguar Gapote', 'Janitor Fish', 'Knifefish',
'Long-Snouted Pipefish', 'Mosquito Fish', 'Mudfish', 'Mullet',
'Pangasius', 'Perch', 'Scat Fish', 'Silver Barb',
'Silver Carp', 'Silver Perch', 'Snakehead',
'Tenpounder', 'Tilapia']

# =========================
# Transform
# =========================
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# =========================
# Load Model
# =========================
model = models.resnet18(weights=None)
model.fc = nn.Linear(model.fc.in_features, len(classes))
model.load_state_dict(torch.load("best_fish_model.pth", map_location=device))
model = model.to(device)
model.eval()

# =========================
# FastAPI App
# =========================
app = FastAPI(title="Fish Classification API")

@app.get("/")
def home():
    return {"message": "Fish Classifier API is running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(image)
        probabilities = torch.nn.functional.softmax(outputs, dim=1)
        confidence, predicted = torch.max(probabilities, 1)

    return {
        "predicted_fish": classes[predicted.item()],
        "confidence": float(confidence.item())
    }
