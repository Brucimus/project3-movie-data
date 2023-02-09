from flask import Flask, render_template
import pandas as pd

app = Flask(__name__, template_folder='./templates/', static_folder='./static')

@app.route("/")
def home():
    df = pd.read_csv('./tmdb_5000_credits.csv')
    print(df.head())
    return render_template('view1.html', data=df.to_dict())

@app.route("/view2")
def view2():
    return render_template('view2.html')

@app.route("/view3")
def view3():
    return render_template('view3.html')