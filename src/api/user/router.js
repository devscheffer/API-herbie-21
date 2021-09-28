const express = require('express');
const router = express.Router();
const cls_controller = require('./controller')

router.post('/signup', cls_controller.signup)
router.post('/login', cls_controller.login)
// router.get('/', cls_controller.get_all)
// router.get('/:id', cls_controller.get_by_id)
router.delete('/:id', cls_controller.delete)
// router.patch('/:id', cls_controller.patch)
// router.get('/search', cls_controller.procurar)

module.exports = router;
