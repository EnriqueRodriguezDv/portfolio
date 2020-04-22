import Scroll from './plugins/scroll.js'

const body = document.getElementById("body")
const header = document.getElementById("header");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const footer = document.getElementById("footer");


new Scroll({
    thisBody: body,
    thisHeader: header,
    thisProjects: projects,
    thisEducation: education,
    thisFooter: footer
})

