from flask import Flask
app = Flask(__name__)

from .core import views

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=80)
