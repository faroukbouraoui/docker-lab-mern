const Service = require('../models/Service');

exports.create = async (req, res) => {
/*	const  {filename}  = req.file;*/
	const {
		serviceName,
		
		
		serviceCategory,
		
	} = req.body;
		console.log(req.body)
	try {
		let service = new Service();
	
		service.serviceName = serviceName;
		
		service.serviceCategory = serviceCategory;
		

		await service.save();

		res.json({
			successMessage: `${serviceName} was created`,
			service,
		});
	} catch (err) {
		console.log(err, 'serviceController.create error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const services = await Service.find({}).populate(
			'serviceCategory',
			
		);

		res.json({ services});
	} catch (err) {
		console.log(err, 'serviceController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
