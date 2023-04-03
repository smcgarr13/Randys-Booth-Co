const router = require('express').Router();
const groupController = require('../../controllers/api/projectGroupController');
const withAuth = require('../../utils/auth');

// set routes to interact with team data.
router.get('/:num', groupController.getTeam);
router.get('/:num/:id', withAuth,groupController.getSingleTeam);
router.post('/:num', groupController.createTeam);
router.put('/num:',groupController.updateGroup);
router.delete('/:num/:id', groupController.deleteGroup);


module.exports = router;