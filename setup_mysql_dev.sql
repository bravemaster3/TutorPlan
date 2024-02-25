-- Set up a MySQL server for the TutorPlan website
-- MySQL setup development

CREATE DATABASE IF NOT EXISTS tutorplan_dev_db;
CREATE USER IF NOT EXISTS 'tutorplan_dev'@'localhost' IDENTIFIED BY 'tutorplan_dev_pwd';
GRANT ALL PRIVILEGES ON tutorplan_dev_db.* TO 'tutorplan_dev'@'localhost' WITH GRANT OPTION;
GRANT SELECT ON performance_schema.* TO 'tutorplan_dev'@'localhost' WITH GRANT OPTION;
