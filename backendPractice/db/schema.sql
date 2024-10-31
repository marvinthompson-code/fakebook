DROP DATABASE IF EXISTS fakebook_db;
CREATE DATABASE fakebook_db;

\c fakebook_db;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    full_name VARCHAR,
    username VARCHAR,
    email VARCHAR(255),
    profile_picture VARCHAR,
    bio VARCHAR
);

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR,
    owner_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    original_author VARCHAR REFERENCES users(id) ON DELETE SET NULL,
    content VARCHAR,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);