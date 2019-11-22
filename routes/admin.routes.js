const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log("Second Middleware Get");
    res.send();
})

router.post('/', (req, res, next) => {
    console.log("Second Middleware Post");
    res.send();
})

module.exports = router;