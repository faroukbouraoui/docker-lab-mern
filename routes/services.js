const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');
const serviceController = require('../controllers/service');

router.post(
	'/',/*authenticatateJWT,upload.single('serviceImage'),*/
	
	
serviceController.create
);

router.get('/', authenticatateJWT,serviceController.readAll);

module.exports = router;
