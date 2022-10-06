const router = require('express').Router();
const matchRouter = require('./match')

router.use('/matches',matchRouter )


module.exports = router;