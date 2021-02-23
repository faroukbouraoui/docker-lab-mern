const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');

router.post('/', authenticatateJWT,upload.single('categoryImage'),categoryController.create);
router.get('/', categoryController.readAll);

module.exports = router;
