const express = require('express');
const router = express.Router();
const skillsCtrl =  require('../controllers/skills.js')
/* GET home page. */
router.get('/', skillsCtrl.mySkills)
router.get('/new', skillsCtrl.mySkills)
router.get('/:id', skillsCtrl.displayOne)
router.post('/', skillsCtrl.addedSkills)
router.delete('/:id', skillsCtrl.deletedSkills)

module.exports = router;
