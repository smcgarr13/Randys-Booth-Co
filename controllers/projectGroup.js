const router = require('express').Router();
const {ProjectTeam } = require('../models');

// GET all Employees from Project. 
exports.getTeam = async (req, res) => {
    try {
      // Find requests by the quote num attached. 
      const dbRequestData = await Request.findAll({
        where:{
          project_num: num,
        },
        include: [
          {
            model: Request,
            attributes: [
              'employee_name',
              'employee_email',
              'employee_role'],
          },
        ],
      });
  
      const requests = dbRequestData.map((request) =>
        request.get({ plain: true })
      );
  
      res.render('homepage', {
        requests,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  // Get One Request from the Project. 
  exports.getSingleTeam = async (req, res) => {
    try {
      const dbSRequestData = await Gallery.findOne({
        where:{
          project_num: num,
          employee_id: id, 
        },
        include: [
          {
            model: Employee,
            attributes: [
                'employee_name',
                'employee_email',
                'employee_role'],
          },
        ],
      });
  
      const request = dbSRequestData.get({ plain: true });
      res.render('request', { request, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // Create Request

  exports.createTeam = async (req, res) => {
    try {
      const dbRequestData = await Request.create({
        employee_name: req.body. employee_name,
        employee_email: req.body.employee_email,
        employee_role: req.body.employee_role,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };