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
   // console.log(Skills.showOne(req.params.id))
    res.render('display', {
        skill: Skills.showOne(req.params.id),
        skills: Skills.allSkills()
    })
}
function addedSkills(req, res) {
    //console.log(req.body)
    Skills.addSkills(req.body)
    res.render('new', {
        skill: Skills.showOne(req.params.id),
        skills: Skills.allSkills()
    })
}

function updatedSkills(req, res) {
    console.log("3",req.body)
    console.log("4", req.params.id)
    Skills.updtSkill(req.params.id, req.body)
    Skills.allSkills()
    res.redirect('/')
}

function deletedSkills(req, res) {
    Skills.frgtSkills(req.params.id)
    res.redirect('/')

}

