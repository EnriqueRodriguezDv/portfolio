import Nav from './plugin/Nav.js'
import Peripheral from './plugin/Peripheral.js'
import Animation from './plugin/Animation.js'
import ChangeImg from './plugin/animations/ChangeImg.js'
import EducationBox from './plugin/EducationBox.js'
import Email from './plugin/Email.js'
import ScrollScreen from './plugin/ScrollScreen.js'
import UrlProject from './plugin/UrlProject.js'

// window.navigator.removeWebWideTrackingException
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

//EducationBox(Element, class)
const educationContainer = {
    html: new EducationBox("htmlT", "html"),
    css: new EducationBox("cssT", "css"),
    javascript: new EducationBox("javascriptT", "javascript"),
    dataBase: new EducationBox("dataBaseT", "dataBase"),
    arduino: new EducationBox("arduinoT", "arduino"),
    communication: new EducationBox("communicationT" ,"communication"),
}

new Email("send");
new ScrollScreen("body");

//UrlProject(Id of article project, url, time)
const urls = {
    projectOneUrl: new UrlProject("projectOne" ,"https://enriquerodriguezdv.github.io/spaceship/", 1500),
    projectTwoUrl: new UrlProject("projectTwo" ,"https://enriquerodriguezdv.github.io/piedra.papel.tijera/" ,2000)
}

//-------------------------------------------------------------

window.addEventListener("orientationchange", checkScreen)
const body = document.getElementById("body")

function checkScreen(){
    headNav
    setTimeout(()=>{
    if(body.scrollHeight / 4 > scrollY && scrollY != 0){
        console.log("1")
        scrollTo(0, 0)
    }
    if(scrollY < body.scrollHeight / 4 * 2 && body.scrollHeight / 4 < scrollY){
        console.log("2")
        scrollTo(0, body.scrollHeight / 4)
    }
    if(scrollY < body.scrollHeight / 4 * 3 && body.scrollHeight / 4 * 2 < scrollY){
        scrollTo(0, body.scrollHeight / 4 * 2)
        console.log("3")
    }
    if(scrollY > body.scrollHeight / 4 * 4){
        scrollTo(0, body.scrollHeight / 4 * 3)
        console.log("4")
    }
}, 1000)
}

