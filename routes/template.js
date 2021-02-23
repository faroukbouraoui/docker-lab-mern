const express = require('express');
const router = express.Router();
const templateController = require('../controllers/template');
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');



router.post('/', authenticatateJWT,upload.single('templateImage'),templateController.create);
router.get('/', templateController.readAll);

module.exports = router;
