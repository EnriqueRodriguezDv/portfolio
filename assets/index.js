import Nav from './plugin/Nav.js'
import Peripheral from './plugin/Peripheral.js'
import Animation from './plugin/Animation.js'
import ChangeImg from './plugin/animations/ChangeImg.js'
import EducationBox from './plugin/EducationBox.js'
import Email from './plugin/Email.js'
window.navigator.removeWebWideTrackingException
// Nav(id, 0:header 1:projects 2:Education 3:Contact)
const headNav = {
    headNavHeader: new Nav("navHeader", 0),
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
    touchstart: new Peripheral("touchmove", 3, null, null),
}

//Animation(Html Container, img to animated, 1:Shoot() 2:fly())
const animationWork = {
    projectOne: new Animation("projectOne", "lightning", 1),
    projectTwo: new Animation("projectTwo", "paper", 2),
}

//ChangeImg extended Animation(Html Container, img initial, new img)
const animationChangeImg = {
    projectThree: new ChangeImg("projectThree", "dyd", "dydComplete"),
    projectFour: new ChangeImg("projectFour", "raiz", "arbol"),
}

//EducationBox(Element and class)
const educationContainer = {
    html: new EducationBox("html"),
    css: new EducationBox("css"),
    javascript: new EducationBox("javascript"),
    dataBase: new EducationBox("dataBase"),
    arduino: new EducationBox("arduino"),
    communication: new EducationBox("communication"),
}

new Email("send");

const body = document.getElementById("body")
body.style.maxWidth = innerWidth;