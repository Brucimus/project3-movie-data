from flask import Flask, render_template, jsonify, make_response
import pandas as pd
import psycopg2
import requests

app = Flask(__name__, template_folder='./templates/', static_folder='./static')


# get json server
@app.route("/data/movies1")
def get_movie_data1():
    df = pd.read_csv('./data/movie_data_1.csv')
    response = make_response(df.to_csv())
    response.headers["Content-Disposition"] = "attachment; filename=movie_data.csv"
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

@app.route("/data/movies2")
def get_movie_data2():
    df = pd.read_csv('./data/movie_data_2.csv')
    response = make_response(df.to_csv())
    response.headers["Content-Disposition"] = "attachment; filename=movie_data.csv"
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

@app.route("/data/movies3")
def get_movie_data3():
    df = pd.read_csv('./data/movie_data_final.csv')
    response = make_response(df.to_csv())
    response.headers["Content-Disposition"] = "attachment; filename=movie_data.csv"
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response


@app.route("/")
def home():
    # df = pd.read_csv('./data/movie_data.csv')
    # print(df.head())

    return render_template('view1.html')

@app.route("/view2")
def view2():
    print(df.head())
    return render_template('view2.html')

@app.route("/view3")
def view3():
    print(df.head())
    return render_template('view3.html')

if __name__ == '__main__':
    app.run(debug=True)

#connect to psql 
# conn = psycopg2.connect(
#     host="localhost",
#     database="movie_data",
#     user="postgres",
#     password="postgres"
# )

# conn.set_client_encoding('UTF8')

# cursor = conn.cursor()

#select all data from movies
# @app.route("/movies")
# def movies():
#     #connect to psql 
#     print("this0")
#     cursor = conn.cursor()
#     print("this1")
#     cursor.execute("SELECT  id, genres, budget, original_language, popularity, production_companies, production_countries,  revenue, runtime, spoken_languages, status, vote_average, vote_count FROM movies")
#     movies = cursor.fetchall()
#     cursor.close()
#     print(movies)
#     return jsonify(movies)

# if __name__ == "__main__":
#     app.run(debug=True)

# response = requests.get("http://localhost:5000/movies")
# movies = response.json()
# print(movies)
