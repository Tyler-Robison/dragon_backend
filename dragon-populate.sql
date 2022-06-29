\connect dragon

-- clear tables
TRUNCATE TABLE users CASCADE;
TRUNCATE TABLE characters CASCADE;
TRUNCATE TABLE monsters CASCADE;
TRUNCATE TABLE items CASCADE;
TRUNCATE TABLE abilities CASCADE;
TRUNCATE TABLE monsters_abilities CASCADE;
TRUNCATE TABLE characters_abilities CASCADE;
TRUNCATE TABLE items_abilities CASCADE;

-- reset id's to 1
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE characters_id_seq RESTART WITH 1;
ALTER SEQUENCE monsters_id_seq RESTART WITH 1;
ALTER SEQUENCE items_id_seq RESTART WITH 1;
ALTER SEQUENCE abilities_id_seq RESTART WITH 1;

-- seed users
\i dragon-user-seed.sql

-- seed chars. Contains Foreign Key ref to users table
\i dragon-character-seed.sql

-- seed monsters via monsters.csv
COPY monsters(Name, ChallengeRating, ChallengeXP, ACType, AC, STR, STRMod, DEX, DEXMod, CON, CONMod, INT, INTMod, WIS, WISMod, CHA, CHAMod, HPDice, HP) 
FROM '/home/blueturtle758/dragon/dragon_backend/monsters.csv'
DELIMITER ';'
CSV HEADER;

-- seed abilities and create CIM JOIN TABLES
\i dragon-ability-seed.sql