--Drop movies table if it exists
DROP TABLE IF EXISTS movies CASCADE;
--Create movies table
CREATE TABLE movies (
  budget INT NOT NULL,
  genres VARCHAR(255) NOT NULL,
  homepage VARCHAR(255) NOT NULL,
  id INT,
  keywords VARCHAR(255) NOT NULL,
  original_language VARCHAR(255) NOT NULL,
  original_title VARCHAR(255) NOT NULL,
  overview VARCHAR(255) NOT NULL,
  popularity FLOAT,
  production_companies VARCHAR(255) NOT NULL,
  production_countries VARCHAR(255) NOT NULL,
  release_date DATE,
  revenue INT,
  runtime INT,
  spoken_languages VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  tagline VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  vote_average FLOAT,
  vote_count INT,
	--set the id and the title columns as primary keys
  PRIMARY KEY (id, title)
);

--Drop credits table if it exists
DROP TABLE IF EXISTS credits CASCADE;
--Create credits table
CREATE TABLE credits (
  movie_id INT,
  title VARCHAR(255) NOT NULL,
  actors VARCHAR(255) NOT NULL,
  crew VARCHAR(255) NOT NULL,
	--set the movie_id column as a foreign key with id column from movies as reference
  FOREIGN KEY (movie_id) REFERENCES movies (id),
		--set the title column as a foreign key with title column from movies as reference
	FOREIGN KEY (title) REFERENCES movies (title)
);
