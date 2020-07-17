import os
from flask import Flask
app = Flask(__name__)
from watchdog.observers import Observer

from .core import db
from .core import views


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=80)
    app.config.from_mapping(
        # TODO: need to get the db on dns first, make sure visible from spa server.
        SQLALCHEMY_DATABASE_URI="postgres:///db.app.local",
    )
    db.init_app(app)
    do_watch()

class MyChangeHandler:
    def dispatch(self, other):
        print("on_change")
        print(other)

def do_watch():
    path = os.getcwd()
    observer = Observer()
    my_watch = MyChangeHandler()
    observer.schedule(my_watch, path, recursive=True)
    observer.start()
    try:
        while observer.isAlive():
            observer.join(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
