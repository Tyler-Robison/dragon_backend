-- Will seed user/character info here
-- password is "password" for both accounts

INSERT INTO abilities (name, type)
VALUES  ('Fireball', 'character'),
        ('Heal', 'character'),
        ('Protect', 'character'),
        ('Berserk', 'character'), 
        ('Frost Bolt', 'character'),
        ('Eldrich Blast', 'character'),
        ('Arcane Armor', 'character'),
        ('Sneak Attack', 'character'),
        ('Multi-Attack', 'monster'),
        ('Breath Weapon', 'monster'),
        ('Pack Attack', 'monster'),
        ('Spew Acid', 'monster'),
        ('Hurl Boulder', 'monster'),
        ('Tail Whip', 'monster'),
        ('Bite', 'monster'),
        ('Roar', 'monster'),
        ('Fiery Breath', 'monster'),
        ('Icy Breath', 'monster');

INSERT INTO characters_abilities (character_id, ability_id)
VALUES (1, 3),
       (1, 4), 
       (2, 1), 
       (2, 5), 
       (2, 7), 
       (3, 6),
       (4, 2),
       (4, 3),
       (5, 8);

INSERT INTO monsters_abilities (monster_id, ability_id)
VALUES (1, 9),
       (1, 10), 
       (1, 14), 
       (1, 15), 
       (1, 16), 
       (2, 13), 
       (3, 13),
       (3, 17),
       (4, 9), 
       (4, 12), 
       (5, 13), 
       (5, 18),
       (6, 10),
       (6, 11),
       (6, 14),
       (6, 15);
       