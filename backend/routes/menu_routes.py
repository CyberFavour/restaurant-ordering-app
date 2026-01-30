# routes/menu_routes.py
# -----------------------------------------
# Handles menu-related API endpoints
# Example: GET /menu
# -----------------------------------------

from flask import Blueprint

# Create a blueprint for menu routes
menu_bp = Blueprint("menu", __name__)

# Example menu endpoint
@menu_bp.route("/menu", methods=["GET"])
def get_menu():
    # Temporary static data (replace with Firestore later)
    sample_menu = [
        {"id": 1, "name": "Margherita Pizza", "price": 9.99},
        {"id": 2, "name": "Chicken Burger", "price": 7.49},
        {"id": 3, "name": "Fries", "price": 2.99}
    ]
    return sample_menu
