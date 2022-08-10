

const axios = require("axios");
const express = require("express");
const jsonschema = require("jsonschema");
// const saveRecipeSchema = require("../schemas/saveRecipe.json");
const { BadRequestError } = require("../expressError");
const router = new express.Router();

const { ensureCorrectUser } = require("../middleware/auth");
const Monster = require("../models/monster");

router.get('/', async (req, res, next) => {
    try {

        const monsters = await Monster.findAll();

        const abilityArray = [];

        const monstersWithAbilities = monsters.reduce((accum, monster, i, arr) => {
            if (i < 5) console.log('monster', monster)
            if (monster.abilityName) abilityArray.push(monster.abilityName);
            if (i === arr.length - 1 || monster.name !== arr[i + 1].name) {
                monster.abilities = [...abilityArray];
                abilityArray.length = 0;
                delete monster.abilityName;
                accum.push(monster);
            }
            else if (!monster.abilityName) accum.push(monster);

            return accum;
        }, [])

        return res.json(monstersWithAbilities);

    } catch (err) {
        return next(err)
    }
});

module.exports = router;