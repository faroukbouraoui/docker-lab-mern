const Offre = require('../models/Offres');


exports.create = async (req, res) => {
/*	const  {filename}  = req.file;*/
	const {
		name,
		description,
        price,
		servicesOffre,
	
		
	} = req.body;
	
	console.log(servicesOffre)
	

	try {
		let offre = new Offre();
      /*  offre.fileName= filename;*/
        offre.name= name;
        offre.description= description;
        offre.price= price;
		offre.servicesOffre= servicesOffre;
		
		

		await offre.save();
			
		res.json({
			successMessage: `${name} was created`,
			offre,
		});
	} catch (err) {
		console.log(err, 'offreController.create error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const offres = await Offre.find({}).populate(
			'servicesOffre',
			
			
			
			
		);

		res.json({ offres});
	} catch (err) {
		console.log(err, 'offreController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
