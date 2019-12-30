DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE messages (
  username char(20),
  message char(50),
  roomname char(20)
);
                --   username: "Valjean",
                -- message: "In mercy's name, three days is all I need.",
                -- roomname: "Hello"
                
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/