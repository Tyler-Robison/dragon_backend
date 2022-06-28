\echo 'Delete and recreate dragon db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS dragon;
CREATE DATABASE dragon;
\connect dragon

\i dragon-schema.sql
-- \i dragon-seed.sql

-- get data from csv
COPY monsters(Name, ChallengeRating, ChallengeXP, ACType, AC, STR, STRMod, DEX, DEXMod, CON, CONMod, INT, INTMod, WIS, WISMod, CHA, CHAMod, HPDice, HP) 
FROM '/home/blueturtle758/dragon/dragon_backend/monsters.csv'
DELIMITER ';'
CSV HEADER;

