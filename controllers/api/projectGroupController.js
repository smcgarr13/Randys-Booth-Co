const router = require('express').Router();
const {ProjectTeam} = require('../../models');

// GET all Employees from Project. 
exports.getTeam = async (req, res) => {
    try {
      // Find requests by the quote num attached. 
      const dbGroupData = await ProjectTeam.findAll({
        where:{
          project_num: num,
        },
        include: [
          {
            model: ProjectTeam,
            attributes: [
              'employee_name',
              'employee_email',
              'employee_role'],
          },
        ],
      });
      const groups = dbGroupData.map((group) =>
        groups.get({ plain: true })
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


  // Get One Group from the Project. 
  exports.getSingleTeam = async (req, res) => {
    try {
      const dbGroupData = await ProjectTeam.findOne({
        where:{
          project_num: num,
          employee_id: id, 
        },
        include: [
          {
            model: ProjectTeam,
            attributes: [
                'employee_name',
                'employee_email',
                'employee_role'],
          },
        ],
      });
  
      const group = dbGroupData.get({ plain: true });
      res.render('request', { request, loggedIn: req.session.loggedIn });
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
          id: req.params.id
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
          project_num: id
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