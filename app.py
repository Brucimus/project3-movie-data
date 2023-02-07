from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('view1.html')

@app.route("/view2")
def view2():
    return render_template('view2.html')

@app.route("/view3")
def view3():
    return render_template('view3.html')