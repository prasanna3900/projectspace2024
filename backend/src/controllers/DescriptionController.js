// const Projects = require("../Models/Projects")
const Description=require("../Models/Description")
var path = require('path')
const fs = require('fs');
 const addDescriptions = async (req, res, next) => {
    console.log(req.body)    
    const {status,project_title,type_of_work,description,work_complexity,assigned_by,start_date, end_date,no_of_days,estimated_price,completed_by,added_by,created_date} = req.body;
      
    const Descriptions = new Description({
        project_title,
        type_of_work,
        description,
        work_complexity,
        assigned_by,
        start_date,
        end_date,
        no_of_days,
        status,
        estimated_price,
        completed_by,
       
        added_by,
        
        created_date,
        
      
        });
        // if((extension!='.png' || extension != '.jpg') && size>70000){
        //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
        // }else{
            
        // }
        await Descriptions.save().then(
            () => {
              res.status(201).json({
                message: 'Post saved successfully!'
              });
            }
          )
          .catch(
            (error) => {
                console.log(error)
              res.status(400).json({
                message: "adding description failed"
              });
              
            }
          );
    
}


exports.addDescriptions = addDescriptions;
