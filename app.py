from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    print("view1")
    return "view1"

@app.route("/view2")
def home():
    print("view2")
    return "view2"

@app.route("/view3")
def home():
    print("view3")
    return "view3"