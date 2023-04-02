const router = require('express').Router();
const groupController = require('../../controllers/api/projectGroupController');
const withAuth = require('../../utils/auth');

// route to create/add a home using async/await
router.get('/:num/team', groupController.getTeam);
router.get('/:num/:id', withAuth,groupController.getSingleTeam);
router.post('/:num', groupController.createTeam);
router.put('/num:/team/',groupController.updateGroup);
router.delete('/:num/:id', groupController.deleteGroup);
// router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;