"use strict";

const db = require("../db");

const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
} = require("../expressError");


/** Related functions for characters. */

class Character {

    /** Find all characters, includes their abilities
     *
     * Returns [{ all character props }, ...]
     **/

    static async findAll() {
        const result = await db.query(
            `SELECT c.id, 
      c.name, 
      c.race,
      c.class AS "creatureClass",
      c.level,
      c.ac, 
      c.str, 
      c.strmod AS "strMod", 
      c.dex, 
      c.dexmod AS "dexMod",
      c.con, 
      c.conmod AS "conMod",
      c.int,
      c.intmod AS "intMod",
      c.wis, 
      c.wismod AS "wisMod", 
      c.cha,
      c.chamod AS "chaMod",
      c.hp, 
      c.speed,
      c.exp,
      a.name AS "abilityName", 
      a.type
           FROM characters c
           LEFT JOIN characters_abilities ca ON ca.character_id = c.id
           LEFT JOIN abilities a ON a.id = ca.ability_id
           ORDER BY c.id`,
        );
       
        return result.rows;
    }

    /** Given an id, return data about a specific user.
     *
     * Returns { id, username, points }
     *
     * Throws NotFoundError if user not found.
     **/

    // static async get(id) {
    //   const userRes = await db.query(
    //     `SELECT id, username,
    //                 points
    //          FROM users
    //          WHERE id = $1`,
    //     [id],
    //   );

    //   const user = userRes.rows[0];

    //   if (!user) throw new NotFoundError(`No user: ${id}`);

    //   return user;
    // }

    //   /** Updates user table to include points value
    //  *
    //  * Returns { id, points }
    //  *
    //  * Throws NotFoundError if user not found.
    //  **/

    // static async setPoints(id, points) {
    //   const result = await db.query(`UPDATE users 
    //                     SET points = $2
    //                     WHERE id = $1 
    //                     RETURNING id, points`, [id, points]);

    //   const user = result.rows[0];

    //   if (!user) throw new NotFoundError(`No user: ${id}`);
    //   return result.rows[0]
    // }


    //     /** Delete user based on id
    //  *
    //  * returns "deleted": id 
    //  *
    //  * Throws NotFoundError if user not found.
    //  **/

    // static async remove(id) {
    //   let result = await db.query(
    //     `DELETE
    //          FROM users
    //          WHERE id = $1
    //          RETURNING username`,
    //     [id],
    //   );
    //   const user = result.rows[0];

    //   if (!user) throw new NotFoundError(`No user: ${id}`);
    // }


}


module.exports = Character;