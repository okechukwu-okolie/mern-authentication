
const express = require('express');
const { signUp } = require('../middleware/authentication');

const router = express.Router();


router.post('/signup',signUp)



module.exports = router