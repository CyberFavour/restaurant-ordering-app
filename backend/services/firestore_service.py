# firestore_service.py
# Handles connection to Firestore (NoSQL database).
# Used for logging, analytics, and additional order data.

import firebase_admin
from firebase_admin import credentials, firestore

# Path to your Firebase service account key JSON file.
# Make sure this file is in the backend folder and is in .gitignore.
SERVICE_ACCOUNT_PATH = "serviceAccountKey.json"

# Load credentials from the service account file.
cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)

# Initialise the Firebase app (only once).
firebase_admin.initialize_app(cred)

# Create a Firestore client instance.
db_firestore = firestore.client()
