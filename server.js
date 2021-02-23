const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const serviceRoutes = require('./routes/services');
const blogRouter = require('./routes/blog')
const serviceRouter = require('./routes/services')
const offreRouter = require('./routes/offre')
const leadRouter = require('./routes/lead')
const partenaireRouter = require ('./routes/partenaire')
const contactRouter = require('./routes/contact')
const templateRouter = require('./routes/template')
const mongoose = require ('mongoose')
var bodyParser = require('body-parser')

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/blog',blogRouter)
/*app.use('/services',serviceRouter)*/
app.use('/api/offre',offreRouter)
app.use('/leads',leadRouter)
app.use('/partenaires',partenaireRouter)
app.use('/contact',contactRouter)
app.use('/api/template',templateRouter)

app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb+srv://estoresdb:farouk123@cluster0.sso99.mongodb.net/estoresdb?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true },
err=> {
    if (!err)
    console.log('connection succeed')
    else 
    console.log('connection failed :' , JSON.stringify(err, undefined,2))
}
)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
