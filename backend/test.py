from fastapi import FastAPI

app = FastAPI()  # This must be named 'app'

@app.get("/")
def read_root():
    return {"message": "FastAPI is working!"}
