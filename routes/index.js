const express = require('express');
const router = express.Router();
const skillsCtrl =  require('../controllers/skills.js')
/* GET home page. */
router.get('/', skillsCtrl.mySkills)
router.get('/:id', skillsCtrl.displayOne)
router.post('/', skillsCtrl.addedSkills)
router.post('/new', skillsCtrl.updatedSkills)
router.delete('/:id', skillsCtrl.deletedSkills)

module.exports = router;
