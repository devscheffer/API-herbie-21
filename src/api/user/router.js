const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/signup', controller.signup)
router.post('/login', controller.login)
// router.get('/', cls_controller.get_all)
// router.get('/:id', cls_controller.get_by_id)
router.delete('/:id', controller.delete)
// router.patch('/:id', cls_controller.patch)
// router.get('/search', cls_controller.procurar)

module.exports = router;
