"use strict";

const db = require("../db");

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");


/** Related functions for monsters. */

class Monster {

  /** Find all monsters.
   *
   * Returns [{ all monster props }, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT id, 
      name, 
      challengerating AS "challengeRating",
      challengexp AS "challengeXP",
      actype AS "acType",
      ac, 
      str, 
      strmod AS "strMod", 
      dex, 
      dexmod AS "dexMod",
      con, 
      conmod AS "conMod",
      int,
      intmod AS "intMod",
      wis, 
      wismod AS "wisMod", 
      cha,
      chamod AS "chaMod",
      hp
           FROM monsters
           ORDER BY id`,
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