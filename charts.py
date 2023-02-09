#import dependencies
from flask import Flask, jsonify
import psycopg2
import requests

#create instance
app = Flask(__name__)

#define function that displays welcome message
@app.route("/")
def home():
    return "Welcome to the Movie Data API"

#connect to psql 
conn = psycopg2.connect(
    host="localhost",
    database="movie_data",
    user="postgres",
    password="postgres"
)

cursor = conn.cursor()

#select all data from movies
@app.route("/movies")
def movies():
    cursor.execute("SELECT * FROM movies")
    movies = cursor.fetchall()
    return jsonify(movies)

if __name__ == "__main__":
    app.run(debug=True)

response = requests.get("http://localhost:5000/movies")
movies = response.json()
print(movies)

