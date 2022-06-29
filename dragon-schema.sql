CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL UNIQUE,
  password TEXT NOT NULL
);


CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL, 
    last_name VARCHAR(20) NOT NULL,
    race VARCHAR(20) NOT NULL,
    class VARCHAR(20) NOT NULL,
    Level INTEGER NOT NULL,
    AC INTEGER NOT NULL, 
    STR INTEGER NOT NULL, 
    STRMod INTEGER NOT NULL, 
    DEX INTEGER NOT NULL, 
    DEXMod INTEGER NOT NULL, 
    CON INTEGER NOT NULL, 
    CONMod INTEGER NOT NULL, 
    INT INTEGER NOT NULL, 
    INTMod INTEGER NOT NULL, 
    WIS INTEGER NOT NULL, 
    WISMod INTEGER NOT NULL, 
    CHA INTEGER NOT NULL, 
    CHAMod INTEGER NOT NULL, 
    HP INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- monster data imported from monsters.csv
CREATE TABLE monsters (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL UNIQUE, 
    ChallengeRating INTEGER NOT NULL,
    ChallengeXP INTEGER NOT NULL, 
    ACType VARCHAR(25),
    AC INTEGER NOT NULL, 
    STR INTEGER NOT NULL, 
    STRMod INTEGER NOT NULL, 
    DEX INTEGER NOT NULL, 
    DEXMod INTEGER NOT NULL, 
    CON INTEGER NOT NULL, 
    CONMod INTEGER NOT NULL, 
    INT INTEGER NOT NULL, 
    INTMod INTEGER NOT NULL, 
    WIS INTEGER NOT NULL, 
    WISMod INTEGER NOT NULL, 
    CHA INTEGER NOT NULL, 
    CHAMod INTEGER NOT NULL, 
    HPDice VARCHAR(20), 
    HP INTEGER NOT NULL
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL NOT NULL 
);

-- make type enum
CREATE TYPE ability_type AS ENUM ('character', 'monster', 'item', 'universal');

CREATE TABLE abilities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL UNIQUE,
  type ability_type NOT NULL
);

-- CIM/ability JOIN tables
CREATE TABLE monsters_abilities (
  monster_id INTEGER REFERENCES monsters ON DELETE CASCADE,
  ability_id INTEGER REFERENCES abilities ON DELETE CASCADE,
  PRIMARY KEY (monster_id, ability_id)
);

CREATE TABLE characters_abilities (
  character_id INTEGER REFERENCES characters ON DELETE CASCADE,
  ability_id INTEGER REFERENCES abilities ON DELETE CASCADE,
  PRIMARY KEY (character_id, ability_id)
);

CREATE TABLE items_abilities (
  item_id INTEGER REFERENCES items ON DELETE CASCADE,
  ability_id INTEGER REFERENCES abilities ON DELETE CASCADE,
  PRIMARY KEY (item_id, ability_id)
);