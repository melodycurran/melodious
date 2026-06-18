CREATE SCHEMA melodious_playlist;
CREATE TABLE melodious_playlist.users(
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(100),
	password VARCHAR(100)
);
CREATE TABLE melodious_playlist.playlist(
	playlist_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES melodious_playlist.users(user_id)
);
SELECT *
FROM melodious_playlist.playlist;
SELECT *
FROM melodious_playlist.users;
INSERT INTO melodious_playlist.users(user_id, user_name, password)
VALUES (1, 'test', 'testpw');
ALTER TABLE melodious_playlist.playlist
ADD COLUMN songs jsonb;
ALTER TABLE melodious_playlist.playlist
ALTER COLUMN songs TYPE jsonb [] USING NULL;