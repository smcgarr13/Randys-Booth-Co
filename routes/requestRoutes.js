const router = require('express').Router();
const requestController = require('../controllers/requestController');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/:num/requests', requestController.getRequests);
router.get('/:num/:id', withAuth, requestController.getSingleRequests);
router.post('/:num', requestController.createRequest);
// router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;