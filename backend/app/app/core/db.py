from flask_sqlalchemy import SQLAlchemy
from flask.cli import with_appcontext
from click import command

from ..main import app

# Initialize SQLAlchemy with no settings
db = SQLAlchemy()

@command("init-db")
@with_appcontext
def init_db_command():
    """Initialize the database."""
    db.create_all()
    echo("Initialized the database.")

def init_app(app):
    """Initialize the Flask app for database usage."""
    db.init_app(app)
    app.cli.add_command(init_db_command)
