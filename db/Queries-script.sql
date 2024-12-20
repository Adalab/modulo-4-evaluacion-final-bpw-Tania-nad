

CREATE TABLE movies(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    actors VARCHAR(75) NOT NULL,
    genre VARCHAR(50) NOT NULL,
	country VARCHAR(100)
);

INSERT INTO movies(name, actors, genre, country)
VALUES
('Forrest Gum', 'Tom Hanks', 'drama', 'USA'),
('Woman on top', 'Penelope Cruz', 'comedia', 'Brasil'),
('The holiday', 'Cameron Díaz', 'romance', 'Inglaterra'),
('Seven', 'Brad Pitt', 'thriller', 'USA');

INSERT INTO movies(name, actors, genre, country)
VALUES
('Mar adentro', 'Javier Bardem', 'drama', 'Spain');

DELETE FROM movies WHERE id = 4;

DELETE FROM movies WHERE id = 9;
DELETE FROM movies WHERE id = 8;
DELETE FROM movies WHERE id = 7;
