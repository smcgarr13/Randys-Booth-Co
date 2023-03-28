const router = require('express').Router();
const projectController = require('../controllers/project');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/:num/team', projectController.getProject);
router.get('/:num/:id', withAuth,projectController.getSingleProject);
router.post('/:num', projectController.createProject);
router.put('/num:',projectController.updateProject);
// router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;