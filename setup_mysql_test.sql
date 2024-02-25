-- Set up a MySQL server for testing the TutorPlan website
-- MySQL setup testelopment

CREATE DATABASE IF NOT EXISTS tutorplan_test_db;
CREATE USER IF NOT EXISTS 'tutorplan_test'@'localhost' IDENTIFIED BY 'tutorplan_test_pwd';
GRANT ALL PRIVILEGES ON tutorplan_test_db.* TO 'tutorplan_test'@'localhost' WITH GRANT OPTION;
GRANT SELECT ON performance_schema.* TO 'tutorplan_test'@'localhost' WITH GRANT OPTION;
