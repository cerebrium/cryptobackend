const localexpress = require('express');
var router = localexpress.Router();

router.get('/', function(req, res) {
    res.status(200).send('hello')
})

module.exports = router;