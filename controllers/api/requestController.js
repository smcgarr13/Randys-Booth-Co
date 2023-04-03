const router = require('express').Router();
const {Request} = require('../../Models');

// GET all Requests from Request 
exports.getRequests = async (req, res) => {
    try {
      // Find requests by the quote num attached. 
      const dbRequestData = await Request.findAll({
        where:{
          project_num: req.params.project_num,
        }});
  
      const requests = dbRequestData.map((request) => request.get({ plain: true }));
  
      res.render('Requests', {requests});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  // Get One Request from the Request 
  exports.getSingleRequest = async (req, res) => {
    try {
      const dbSRequestData = await Request.findOne({
        where:{
          project_num: req.params.project_num,
          request_num: req.params.request_num,
        }});
  
      const request = dbSRequestData.get({ plain: true });
      res.render('Request', { request});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // Create Request

  exports.createRequest = async (req, res) => {
    try {
      const dbRequestData = await Request.create({
        project_num: req.body.project_num,
        request_num: req.body.request_num,
        request_type: req.body.request_type,
        request_date: req.body.request_date,
        request_to: req.body.request_to,
        To_desc: req.body.To_desc,
        total_cost: req.body.total_cost,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
// Put request
  exports.updateRequest = async (req, res) => {
    try {
      const request = await Request.update(req.body, {
        where: {
          project_num: req.body.project_num,
          request_num: req.body.request_num,
        }
      });
      res.status(200).json(request);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  // Delete
  exports.deleteRequest = async (req, res) => {
    try {
      const request = await Request.destroy({
        where: {
          project_num: req.body.project_num,
          request_num: req.body.request_num,
        }
      });
      if (!request) {
        return res.status(404).json({ error: 'Request item not found' });
      }
      res.status(200).json({ message: 'Request item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };