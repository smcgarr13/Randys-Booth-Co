const router = require('express').Router();
const projectController = require('../controllers/projectController');
const withAuth = require('../utils/auth');

console.log(projectController);
// route to create/add a home using async/await
router.get('/', projectController.getProjects);
router.get('/projects/:num', withAuth,projectController.getSingleProject);
router.post('/projects/:num', projectController.createProject);
router.put('/projects/:num',projectController.updateProject);
router.delete('/projects/:num', projectController.deleteProject);
// router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;