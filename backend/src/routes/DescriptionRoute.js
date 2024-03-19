const express = require('express');
const Router = express.Router();

const multer = require('multer') //multer
const upload = multer({ dest: 'uploads/course_icons' });
const userUpload = multer({dest:'uploads/user_icons'})


 const DescriptionController = require('../controllers/DescriptionController')

 
// Router.post('/register',userUpload.any(), UserController.Register);
// Router.get('/getProjects',ProjectController.getProjects);
Router.post('/addDescriptions',DescriptionController.addDescriptions);
// Router.get('/getProjectsbyid/:id',ProjectController.getProjectsById);
// Router.put('/updateProjects/:id',ProjectController.updateProjects);
module.exports = Router;