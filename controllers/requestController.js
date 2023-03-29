const router = require('express').Router();
const {Request, RequestList } = require('../models');

// GET all Requests from Project. 
exports.getRequests = async (req, res) => {
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
              'request_type',
              'project_num',
              'order_date',
              'description'],
          },
        ],
      });
  
      const requests = dbRequestData.map((request) =>
        request.get({ plain: true })
      );
  
      res.render('requests', {
        requests,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  // Get One Request from the Project. 
  exports.getSingleRequest = async (req, res) => {
    try {
      const dbSRequestData = await Request.findOne({
        where:{
          project_num: id,
          request_num: num, 
        },
        include: [
          {
            model: Request,
            attributes: [
              'request_type',
              'project_num',
              'order_date',
              'description',
              'request_to',
              'required_date',
              'total_cost',
            ],
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

  exports.createRequest = async (req, res) => {
    try {
      const dbRequestData = await Request.create({
        request_type: req.body.request_type,
        request_date: req.body.request_date,
        request_num: req.body.request_num,
        project_num: req.body.project_num,
        request_to: req.body.request_to,
        To_desc: req.body.To_desc,
        total_cost: req.body.total_cost,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  exports.updateRequest = async (req, res) => {
    try {
      const request = await Request.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(request);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  exports.deleteRequest = async (req, res) => {
    try {
      const request = await Request.destroy({
        where: {
          project_num: id
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