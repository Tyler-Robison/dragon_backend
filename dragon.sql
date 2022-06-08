\echo 'Delete and recreate dragon db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS dragon;
CREATE DATABASE dragon;
\connect dragon

\i dragon-schema.sql
\i dragon-seed.sql

-- get data from csv
-- COPY monsters 
-- FROM 'C:\Users\tyler\Desktop\db_data\monsters.csv'
-- DELIMITER ';'
-- CSV HEADER;

-- \! pwd tells me directory where I am, not psql

\copy monsters FROM "C:\Users\tyler\Desktop\db_data\monsters.csv" DELIMITER ';' CSV HEADER

-- keep locally?
-- \copy monsters FROM "monsters.csv" DELIMITER ';' CSV HEADER