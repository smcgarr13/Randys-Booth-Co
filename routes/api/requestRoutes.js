const router = require('express').Router();
const requestController = require('../../controllers/api/requestController');
// const withAuth = require('../../utils/auth');

// set routes to interact with request data. 
router.get('/:num', requestController.getRequests);
router.get('/:num/:id', requestController.getSingleRequest);
router.post('/:num', requestController.createRequest);
router.put('/:num/:id',requestController.updateRequest);
router.delete('/:num/:id', requestController.deleteRequest);

module.exports = router;