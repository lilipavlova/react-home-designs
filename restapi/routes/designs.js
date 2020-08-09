const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.designs.get);

router.post('/', auth(), controllers.designs.post);

router.put('/:id', auth(), controllers.designs.put);

router.delete('/:id', auth(), controllers.designs.delete);

module.exports = router;