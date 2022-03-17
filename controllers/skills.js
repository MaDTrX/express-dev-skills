const Skills = require('../models/skill')

module.exports = {
    mySkills,
    displayOne,
    addedSkills,
    updatedSkills,
    deletedSkills
}

function mySkills(req, res) {
    res.render('skills', {
        skills: Skills.allSkills()
    })
}
function displayOne(req, res) {
    console.log(Skills.showOne(req.params.id))
    res.render('display', {
        skill: Skills.showOne(req.params.id)
    })
}
function addedSkills(req, res) {
    Skills.addSkills(req.params.body)
    res.redirect('/skills')
}
function updatedSkills(req, res) {
    Skills.updtSkill(req.params.id, req.params.body)
    res.redirect('/skills')
}
function deletedSkills(req, res) {
    Skills.frgtSkills(req.params.id)
    res.redirect('/skills')

}

