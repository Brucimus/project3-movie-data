from flask import *

app = Flask(__name__)

@app.route("/")
def home():
    return (
        f"Welcome to the Hawaii Climate Analysis API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/temp/start<br/>"
        f"/api/v1.0/temp/start/end<br/>"
        f"<p>'start' and 'end' date should be in the format MMDDYYYY.</p>"

    )
    # return render_template('fview1.html')

# @app.route("/view2")
# def view2():
#     return render_template('view2.html')

# @app.route("/view3")
# def view3():
#     return render_template('view3.html')