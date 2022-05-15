const express = require('express');
const router = express.Router();
const skillsCtrl =  require('../controllers/skills.js')
/* GET home page. */
router.get('/', skillsCtrl.mySkills)
router.get('/:id', skillsCtrl.displayOne)
router.post('/new', skillsCtrl.addedSkills)
router.delete('/:id', skillsCtrl.deletedSkills)
router.put('/', skillsCtrl.updatedSkills)

module.exports = router;
