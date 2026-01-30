
# app.py
# -----------------------------
# Main entrypoint for the Flask backend
# Handles app creation and route registration
# -----------------------------

from flask import Flask

# Create the Flask application instance
app = Flask(__name__)

# Basic test route to confirm the API is running
@app.route("/")
def home():
    return {"message": "Restaurant Ordering App API is running"}

# Run the app locally (not used in deployment)
if __name__ == "__main__":
    app.run(debug=True)
