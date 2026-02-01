# order_routes.py
# Handles all order-related API endpoints.
# Uses SQLAlchemy for SQL storage and Firestore for logging.

from flask import Blueprint, request, jsonify
from models import db, Order, OrderItem
from services.firestore_service import db_firestore
import uuid
from datetime import datetime

# Create the blueprint for order routes
order_bp = Blueprint("order", __name__)

# -----------------------------
# CREATE A NEW ORDER (POST)
# -----------------------------
@order_bp.route("/order", methods=["POST"])
def create_order():
    """
    Creates a new order.
    Saves main order details in SQL (Order + OrderItem tables).
    Logs order event in Firestore for analytics.
    """

    data = request.get_json()

    # Generate unique order ID
    order_id = str(uuid.uuid4())

    # Calculate total price
    total_price = data.get("total", 0)

    # Create SQL Order entry
    new_order = Order(
        order_id=order_id,
        user_id="test-user",  # Placeholder until auth is added
        total_price=total_price,
        status="pending",
        created_at=datetime.utcnow()
    )

    db.session.add(new_order)
    db.session.commit()

    # Save each item in OrderItem table
    for item in data.get("items", []):
        order_item = OrderItem(
            order_item_id=str(uuid.uuid4()),
            order_id=order_id,
            item_id=item.get("item_id", "unknown"),
            quantity=1
        )
        db.session.add(order_item)

    db.session.commit()

    # Log order in Firestore
    db_firestore.collection("order_logs").add({
        "order_id": order_id,
        "total": total_price,
        "timestamp": datetime.utcnow()
    })

    return jsonify({"message": "Order created", "order_id": order_id}), 201


# -----------------------------
# GET ORDER BY ID (GET)
# -----------------------------
@order_bp.route("/order/<order_id>", methods=["GET"])
def get_order(order_id):
    """
    Returns order details from SQL.
    """

    order = Order.query.filter_by(order_id=order_id).first()

    if not order:
        return jsonify({"error": "Order not found"}), 404

    return jsonify({
        "order_id": order.order_id,
        "total_price": order.total_price,
        "status": order.status,
        "created_at": order.created_at
    }), 200
