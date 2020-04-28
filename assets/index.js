import Nav from './plugin/Nav.js'
import Peripheral from './plugin/Peripheral.js'
import Animation from './plugin/Animation.js'

// Nav(id, 0:header 1:projects 2:Education 3:Contact)
const headNav = {
    headNavProject: new Nav("navProjects", 1),
    headNavEducation: new Nav("navEducation", 2),
    headNavContact: new Nav("navContact", 3),
}

const globalNav = {
    globalNavHeader: new Nav("globalNavHeader", 0),
    globalNavProject: new Nav("globalNavProject", 1),
    globalNavEducation: new Nav("globalNavEducation", 2),
    globalNavContact: new Nav("globalNavContact", 3)
}

//Peripheral(event addEventListened, 1:keyCode 2:deltaY, codeUp, codeDown)
const keyboardAndMouse = {
    keyboard: new Peripheral("keyup", 1, 38, 40),
    wheel: new Peripheral("wheel", 2, -100, 100),
}


const animationWork = {
    projectOne: new Animation("projectOne", "lightning", 1, null),
    projectTwo: new Animation("projectTwo", "paper", 2, null),
}
