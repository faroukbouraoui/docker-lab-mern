const Lead = require("../models/Lead");

exports.create = async (req, res) => {
  const {
    nomComplet,
    entreprise,
  
    telephone,
    adresse,
    email,
    offre,
    template,
    services
  } = req.body.userData;

  try {
    console.log(req.body);
    console.log(req.body.userid);
    let lead = new Lead();
    lead.NomComplet = nomComplet;
    lead.entreprise = entreprise;
   
    lead.numtel = telephone;
    lead.adresse = adresse;
    lead.email= email;
    lead.refService= services;
    lead.refOffre = offre;
    lead.refTemplate = template;
    lead.refuser = req.body.userid;
    console.log(lead);
    await lead.save();

    res.json({
      successMessage: "done",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
exports.readAll = async (req, res) => {
	try {
		const leads = await Lead.find({}).populate(
			'refuser',
			
			
			
			
		);

		res.json({ leads});
	} catch (err) {
		console.log(err, 'leadController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};