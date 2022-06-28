CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE characters (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(20) NOT NULL, 
      last_name VARCHAR(20) NOT NULL,
      race VARCHAR(20) NOT NULL,
      class VARCHAR(20) NOT NULL,
      user_id INTEGER REFERENCES users ON DELETE CASCADE
);

-- monster data imported from monsters.csv
CREATE TABLE monsters (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(50), 
    ChallengeRating INTEGER,
    ChallengeXP INTEGER, 
    ACType VARCHAR(25),
    AC INTEGER, 
    STR INTEGER, 
    STRMod INTEGER, 
    DEX INTEGER, 
    DEXMod INTEGER, 
    CON INTEGER, 
    CONMod INTEGER, 
    INT INTEGER, 
    INTMod INTEGER, 
    WIS INTEGER, 
    WISMod INTEGER, 
    CHA INTEGER, 
    CHAMod INTEGER, 
    HPDice VARCHAR(20), 
    HP INTEGER
);