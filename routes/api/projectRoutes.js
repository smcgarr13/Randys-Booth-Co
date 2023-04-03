const router = require('express').Router();
const projectController = require('../../controllers/api/projectController');
const withAuth = require('../../utils/auth');

console.log(projectController);
// set routes to interact with project data.
router.get('/', projectController.getProjects);
router.get('/:num', withAuth,projectController.getSingleProject);
router.post('/', projectController.createProject);
router.put('/:num',projectController.updateProject);
router.delete('/:num', projectController.deleteProject);
// router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;