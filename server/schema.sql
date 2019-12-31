DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username char(20),
  message char(50),
  roomname char(20)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username char(20)
)

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/