"use strict";

const db = require("../db");

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");


/** Related functions for monsters. */

class Monster {

  /** Find all monsters, includes their abilities
   *
   * Returns [{ all monster props }, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT m.id, 
      m.name, 
      m.challengerating AS "challengeRating",
      m.challengexp AS "challengeXP",
      m.actype AS "acType",
      m.ac, 
      m.str, 
      m.strmod AS "strMod", 
      m.dex, 
      m.dexmod AS "dexMod",
      m.con, 
      m.conmod AS "conMod",
      m.int,
      m.intmod AS "intMod",
      m.wis, 
      m.wismod AS "wisMod", 
      m.cha,
      m.chamod AS "chaMod",
      m.hp, 
      a.name AS "abilityName", 
      a.type
           FROM monsters m
           LEFT JOIN monsters_abilities ma ON ma.monster_id = m.id
           LEFT JOIN abilities a ON a.id = ma.ability_id
           ORDER BY m.id`,
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


module.exports = Monster;