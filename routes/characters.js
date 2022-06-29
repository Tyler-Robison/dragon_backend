

const axios = require("axios");
const express = require("express");
const jsonschema = require("jsonschema");
// const saveRecipeSchema = require("../schemas/saveRecipe.json");
const { BadRequestError } = require("../expressError");
const router = new express.Router();

const { ensureCorrectUser } = require("../middleware/auth");
const Character = require('../models/character')

router.get('/', async (req, res, next) => {
    try {

        const characters = await Character.findAll();

        const abilityArray = [];

        const charactersWithAbilities = characters.reduce((accum, character, i, arr) => {
            if (character.abilityName) abilityArray.push(character.abilityName);
            if (i === arr.length - 1 || character.name !== arr[i + 1].name) {
                character.abilities = [...abilityArray];
                abilityArray.length = 0;
                accum.push(character);
            }
            else if (!character.abilityName) accum.push(character);

            return accum;
        }, [])

        return res.json(charactersWithAbilities);

    } catch (err) {
        return next(err)
    }
});

module.exports = router;