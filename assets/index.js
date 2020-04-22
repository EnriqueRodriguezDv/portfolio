import Scroll from './plugins/scroll.js'

const body = document.getElementById("body")
const header = document.getElementById("header");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const footer = document.getElementById("footer");
const navProjects = document.getElementById("navProjects");
const navEducation = document.getElementById("navEducation");
const navContact = document.getElementById("navContact");


new Scroll({
    thisBody: body,
    thisHeader: header,
    thisProjects: projects,
    thisEducation: education,
    thisFooter: footer,
    thisNavProjects: navProjects,
    thisNavEducation: navEducation,
    thisNavContact: navContact
})

