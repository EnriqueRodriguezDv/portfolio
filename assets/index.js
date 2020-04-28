import Nav from './plugin/Nav.js'
import Peripheral from './plugin/Peripheral.js'

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

//For the class Peripheral... attrEvent: event.keyCode = 1;  event.deltaY = 2;
const keyboardAndMouse = {
    keyboard: new Peripheral("keyup", 1, 38, 40),
    wheel: new Peripheral("wheel", 2, -100, 100),
}
