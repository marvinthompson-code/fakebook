require("dotenv").config();

const pgp = require("pg-promise")({});

const db = pgp(String(process.env.DATABASE_URL));

module.exports = db;