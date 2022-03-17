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
    Skills.addSkills(req.body)
    res.redirect('/')
}
function updatedSkills(req, res) {
    console.log(req.body)
    Skills.updtSkill(req.params.id, req.body)
    res.redirect('/')
}
function deletedSkills(req, res) {
    Skills.frgtSkills(req.params.id)
    res.redirect('/')

}

