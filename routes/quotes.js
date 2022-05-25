const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const bodyParser = require('body-parser')

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

/* LIST quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* READ quotes. */
router.get('/:quote_id', async function(req, res, next) {
  try {
    console.log(req.params)
    res.json(await quotes.getSingle(req.params.quote_id));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  console.log(req)
  console.log("\n\n\n")
  console.log(req.body)
  try {
    res.json(await quotes.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
