--Drop movies table if it exists
DROP TABLE IF EXISTS movies CASCADE;
--Create movies table
CREATE TABLE movies (
  title VARCHAR NOT NULL,
  budget INT NOT NULL,
  genres VARCHAR NOT NULL,
  id SERIAL,
  original_language VARCHAR NOT NULL,
  original_title VARCHAR NOT NULL,
  popularity FLOAT,
  production_companies VARCHAR NOT NULL,
  production_countries VARCHAR NOT NULL,
  release_date DATE,
  revenue FLOAT,
  runtime FLOAT,
  spoken_languages VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  tagline VARCHAR NOT NULL,
  vote_average FLOAT,
  vote_count INT,
  movie_id SERIAL,
  actors VARCHAR NOT NULL,
  crew VARCHAR NOT NULL
);
