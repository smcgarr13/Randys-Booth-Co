const router = require('express').Router();
const {ProjectTeam} = require('../../models');

// GET all Employees from Project. 
exports.getTeam = async (req, res) => {
    try {
      // Find requests by the quote num attached. 
      const dbGroupData = await ProjectTeam.findAll({
        where:{
          project_num: req.body.project_num,
        }});
      const groups = dbGroupData.map((group) =>
        groups.get({ plain: true })
      );
  
      res.render('ProjectTeam', {
        groups,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  // Get One Group from the Project. 
  exports.getSingleTeam = async (req, res) => {
    try {
      const dbGroupData = await ProjectTeam.findOne({
        where:{
          project_num: req.body.project_num,
          employee_id: req.body.employee_id, 
        }});
  
      const group = dbGroupData.get({ plain: true });
      res.render('ProjectTeam', {group});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // Create Group

  exports.createTeam = async (req, res) => {
    try {
      const dbGroupData = await ProjectTeam.create({
        where:{
          project_num: num,
        },
        employee_name: req.body. employee_name,
        employee_email: req.body.employee_email,
        employee_role: req.body.employee_role,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  exports.updateGroup = async (req, res) => {
    try {
      const Group = await ProjectTeam.update(req.body, {
        where: {
          project_num: req.body.project_num,
          employee_id: req.body.employee_id, 
        }
      });
      res.status(200).json(Group);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  exports.deleteGroup = async (req, res) => {
    try {
      const Group = await ProjectTeam.destroy({
        where: {
          project_num: req.body.project_num,
        }
      });
      if (!Group) {
        return res.status(404).json({ error: 'Group item not found' });
      }
      res.status(200).json({ message: 'Group item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };