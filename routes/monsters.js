

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
        return res.json(monsters);

    } catch (err) {
        return next(err)
    }
});

module.exports = router;