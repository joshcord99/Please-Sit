DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL
  last_name VARCHAR(100) NOT NULL
  user_name VARCHAR(100) NOT NULL
  password VARCHAR(100), INT NOT NULL
  email: VARCHAR(100) NOT NULL
  goal VARCHAR(100) NOT NULL
);
