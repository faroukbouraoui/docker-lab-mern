const BlogModel = require('../models/Blog');

exports.create = async (req, res) => {
    const  {filename}  = req.file;
    const {
      title,
      author,
      description
      
    } = req.body;
  
    try {
      let blog = new BlogModel();
          blog.fileName= filename;
          blog.title= title;
          blog.author= author;
          blog.description= description;
         
      
  
      await blog.save();
  
      res.json({
        successMessage: `${title} was created`,
        blog,
      });
    } catch (err) {
      console.log(err, 'error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
}
exports.readAll= async (req, res)=>{
	try {
		const blogs = await BlogModel.find({});

		res.status(200).json({
			blogs,
		});
	} catch (err) {
		console.log('blog readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}