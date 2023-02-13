from flask import Flask, render_template, jsonify
import pandas as pd
import psycopg2
import requests

app = Flask(__name__, template_folder='./templates/', static_folder='./static')

@app.route("/")
def home():
    df = pd.read_csv('./movie_data.csv')
    print(df.head())
    return render_template('view1.html', data=df.to_dict())

@app.route("/view2")
def view2():
    return render_template('view2.html')

@app.route("/view3")
def view3():
    return render_template('view3.html')

@app.route("/view4")
def view4():
    return render_template('view4.html')

@app.route("/view5")
def view5():
    return render_template('view5.html')

#connect to psql 
conn = psycopg2.connect(
    host="localhost",
    database="movie_data",
    user="postgres",
    password="postgres"
)

conn.set_client_encoding('UTF8')

# cursor = conn.cursor()

#select all data from movies
@app.route("/movies")
def movies():
    #connect to psql 
    cursor = conn.cursor()
    cursor.execute("SELECT  id, genres, budget, original_language, popularity, production_companies, production_countries,  revenue, runtime, spoken_languages, status, vote_average, vote_count FROM movies")
    movies = cursor.fetchall()
    cursor.close()
    print(movies)
    return jsonify(movies)

@app.route("/genresrevenue")
def genresrevenue():
    #connect to psql 
    cursor = conn.cursor()
    cursor.execute("SELECT a.genres, AVG(a.revenue), SUM(a.revenue), COUNT(*) FROM (SELECT Left(substring(genres from position('name: ' in genres)+6 for 20),position('}' in substring(genres from position('name: ' in genres)+6 for 20))-1) as genres, revenue FROM movies) a GROUP BY genres")
    genresrevenue = cursor.fetchall()
    cursor.close()
    print(genresrevenue)
    return jsonify(genresrevenue)

@app.route("/genrespopularity")
def genrespopularity():
    #connect to psql 
    cursor = conn.cursor()
    cursor.execute("SELECT a.genres, AVG(a.popularity), SUM(a.popularity), COUNT(*) FROM (SELECT Left(substring(genres from position('name: ' in genres)+6 for 20),position('}' in substring(genres from position('name: ' in genres)+6 for 20))-1) as genres, popularity FROM movies) a GROUP BY genres")
    genrespopularity = cursor.fetchall()
    cursor.close()
    print(genrespopularity)
    return jsonify(genrespopularity)

if __name__ == "__main__":
    app.run(debug=True)
