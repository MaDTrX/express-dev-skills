const skills = ["Functional Programming", "Asynchronous Programming", "Node JS", "jQuery", "HTML / CSS", "Express Js", "React Js", "MongoDB", "Java", "Django", "Python", "Ruby", "Ruby on Rails" ]
module.exports = {
    allSkills,
    showOne,
    addSkills,
    updtSkills,
    frgtSkills
}
function allSkills () {
    return skills
}
function showOne(id) {
  return skills.find((skillEl, idx) => idx == id)  
}
function addSkills(skill){
  return skills.push(`${skill.skill}`)
}
function updtSkills(id, skill) {
  return skills.splice(id, 1, skill.skill)
}
function frgtSkills(id) {
  return skills.splice(id,1)
}