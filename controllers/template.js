const Template = require('../models/Template');

exports.create = async (req, res) => {
    const {filename} = req.file;
	const { title,link } = req.body;

	try {
		const templateExist = await Template.findOne({ title });
		if (templateExist) {
			return res.status(400).json({
				errorMessage: `${title} already exists`,
			});
		}

		let newTemplate = new Template();
		newTemplate.fileName = filename;
		newTemplate.title = title;
		newTemplate.link= link;

		newTemplate = await newTemplate.save();

		res.status(200).json({
			title: newTemplate,
			successMessage: `${newTemplate.title} was created!`,
		});
	} catch (err) {
		console.log('template create error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const templates = await Template.find({});

		res.status(200).json({
			templates,
		});
	} catch (err) {
		console.log('template readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
