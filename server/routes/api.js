const express = require('express');
const router = express.Router();

router.get('/v1', (req,res) => {
    res.send('hi from api')
});

module.exports = router;