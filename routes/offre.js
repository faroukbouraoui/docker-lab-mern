const express = require('express')
const upload = require('../middleware/multer');
const router = express.Router()
const { authenticatateJWT } = require('../middleware/authenticator');
const offreController = require('../controllers/offre');




router.post('/'/*,authenticatateJWT*/,/*upload.single('offreImage'),*/
	
	
offreController.create
);

router.get('/',offreController.readAll);






module.exports= router