// const router = require('express').Router();
const {Project} = require('../models');

// GET all Projects from Project. 
exports.getProjects = async (req, res) => {
    try {
      // Find requests by the quote num attached. 
     
  const dbProjectData = await Project.findAll(
    // {
//     include:[
//       {
//     attributes: [
//       'project_name',
//       'project_num',
//       'buyer_name',
//       'buyer_email',
//       'starting_date',
//       'delivery_date',
//       ]}
//  ]
//   }
 );
  const projects = dbProjectData.map((project) =>
    project.get({ plain: true })
  );
  console.log(dbProjectData);
  res.render('Project', {projects});
      // const projects = dbProjectData.map((project) =>
      //   request.get({ plain: true })
      // );
  
      // res.render('Project', {
      //   projects,
      //   loggedIn: req.session.loggedIn,
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  // Get One Project from the Project. 
  exports.getSingleProject = async (req, res) => {
    try {
      const dbProjectData = await Project.findOne({
        where:{
          project_num: num,
        },
        include: [
          {
            model: Project,
            attributes: [
                'project_name',
                'project_num',
                'buyer_name',
                'buyer_email',
                'starting_date',
                'delivery_date',
            ],
          },
        ],
      });
  
      const project = dbProjectData.get({ plain: true });
      res.render('project', { project, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // Create Project

  exports.createProject = async (req, res) => {
    try {
      const dbProjectData = await Project.create({

        project_name: req.body.project_name,
        project_num: req.body.project_num,
        buyer_name: req.body.buyer_name,
        buyer_email: req.body.buyer_email,
        starting_date: req.body.starting_date,
        To_desc: req.body.To_desc,
        delivery_date: req.body.delivery_date,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

//   Update Project
exports.updateProject = async (req, res) => {
    try {
      const project = await Project.update(req.body, {
        where: {
          project_num: id
        }
      });
      res.status(200).json(project);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  exports.deleteProject = async (req, res) => {
    try {
      const project = await Project.destroy({
        where: {
          project_num: id
        }
      });
      if (!project) {
        return res.status(404).json({ error: 'Project item not found' });
      }
      res.status(200).json({ message: 'Project item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };