from flask import Flask
app = Flask(__name__)

from .core import db
from .core import views

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=80)
    app.config.from_mapping(
        # TODO: need to get the db on dns first, make sure visible from spa server.
        SQLALCHEMY_DATABASE_URI="postgres:///db.app.local",
    )
    db.init_app(app)
