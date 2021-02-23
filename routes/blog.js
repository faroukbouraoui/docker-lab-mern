

const express = require('express')
const router = express.Router()
const BlogModel = require('./../models/Blog')
const upload = require('../middleware/multer');
const { authenticatateJWT } = require('../middleware/authenticator');
const blogController = require('../controllers/blog');
router.get('/read', (req,res)=>{
    BlogModel.find({},(err,result)=>{
      if(err){
        res.send(err)
      }
      res.send(result)
    })
  })

router.get('/readall', async(req, res)=>{
  try{
    const blog = await BlogModel.find()
    if(!blog) throw Error ('no items');
    res.status(200).json(blog)
  }catch(err){
    res.status(400).json({msg: err})
  }
})
router.post('/',authenticatateJWT,upload.single('blogImage'),
	
	
blogController.create
);
router.get('/',authenticatateJWT,blogController.readAll)
 
 
   
  
  router.patch('/update/', async (req,res)=>{
    const newtitle = req.body.newtitle
    const newdauthor = req.body.newdauthor
    const newdescription= req.body.newdescription
    const newservice = req.body.services
    
  
    try {
     await BlogModel.findById(id,(err,updatedblog)=>{
        updatedblog.title = newtitle,
        updatedblog.author=newdauthor,
        updatedblog.description=newdescription,
        updateblog.services= newservice,
        updatedblog.save()
        res.send("update")
      })
    }catch(err){
      console.log(err)
    }
  })

  router.get('/read/:id',async (req, res) =>{
     BlogModel.findById(req.params.id , (err,result)=>{
        if(err){
            res.send(err)
          }
          res.json(result)
        })})


  router.delete('/delete/:id',async(req,res)=>{
    try{
        const blog = await BlogModel.findByIdAndDelete(req.params.id)
        if(!blog) throw Error('not found blog');
        res.status(200).json({success:true})
    }catch(err){
      res.status(400).json({msg: err})
    }
  })  

  router.delete('/delete1/:id',async(req, res) =>{
    const id = req.params.id
    await BlogModel.findByIdAndRemove(id).exec()
    res.send("deleted")
  })

  router.patch('/update/:id', async(req, res)=>{
    try{
      const blog = await BlogModel.findByIdAndUpdate(req.params.id, req.body)
      if(!blog) throw Error ('not found this blog')
      res.status(200).json({success:true})
    }catch(err){
      res.status(400).json({msg: err})
    }
  })
  router.route('/update-blog/:id').put((req, res, next) => {
    BlogModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })
     
  router.get('/update/:id', (req,res)=>{
    BlogModel.findById(req.params.id,(error,data)=>{
      if (error){
        return error
      }else{
        res.json(data)
      }
    })
  })



  module.exports = router