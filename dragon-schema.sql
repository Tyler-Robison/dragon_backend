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
    name VARCHAR(50), 
    challenge_rating INTEGER,
    challenge_xp INTEGER, 
    ac_type VARCHAR(20),
    ac INTEGER, 
    str INTEGER, 
    str_mod INTEGER, 
    dex INTEGER, 
    dex_mod INTEGER, 
    con INTEGER, 
    con_mod INTEGER, 
    int INTEGER, 
    int_mod INTEGER, 
    wis INTEGER, 
    wis_mod INTEGER, 
    cha INTEGER, 
    cha_mod INTEGER, 
    hp_dice VARCHAR(20), 
    hp INTEGER
);