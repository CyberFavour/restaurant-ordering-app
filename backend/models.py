# models.py
# Contains SQLAlchemy models that represent the SQL database tables.
# These models are based on your ERD: User, MenuItem, Order, OrderItem.

from flask_sqlalchemy import SQLAlchemy

# Create a global SQLAlchemy instance.
# It will be initialised with the Flask app in app.py.
db = SQLAlchemy()


class User(db.Model):
    """
    User table.
    Stores basic user information and role (e.g. customer, admin).
    """
    __tablename__ = "user"

    user_id = db.Column(db.String, primary_key=True)  # PK
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    role = db.Column(db.String, default="customer")  # e.g. 'customer' or 'admin'


class MenuItem(db.Model):
    """
    MenuItem table.
    Stores menu items available for ordering.
    """
    __tablename__ = "menu_item"

    item_id = db.Column(db.String, primary_key=True)  # PK
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String, nullable=True)


class Order(db.Model):
    """
    Order table.
    Represents a customer's order.
    Linked to User via user_id.
    """
    __tablename__ = "order"

    order_id = db.Column(db.String, primary_key=True)  # PK
    user_id = db.Column(db.String, db.ForeignKey("user.user_id"), nullable=False)  # FK to User
    total_price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String, default="pending")  # e.g. 'pending', 'completed'
    created_at = db.Column(db.DateTime, nullable=False)


class OrderItem(db.Model):
    """
    OrderItem table.
    Represents individual items within an order.
    Links an Order to specific MenuItems.
    """
    __tablename__ = "order_item"

    order_item_id = db.Column(db.String, primary_key=True)  # PK
    order_id = db.Column(db.String, db.ForeignKey("order.order_id"), nullable=False)  # FK to Order
    item_id = db.Column(db.String, db.ForeignKey("menu_item.item_id"), nullable=False)  # FK to MenuItem
    quantity = db.Column(db.Integer, nullable=False)
