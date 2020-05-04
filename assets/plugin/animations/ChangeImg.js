import Animation from "../Animation.js";

class ChangeImg extends Animation{
    constructor(elementHtmlHover, elementHtmlAnimated, elementHtmlAnimatedToChange){
        super(elementHtmlHover, elementHtmlAnimated);
        this.elementHtmlAnimatedToChange = document.getElementById(elementHtmlAnimatedToChange);
        this.elementHtmlHover.addEventListener("mouseover", this.change.bind(this));
        this.elementHtmlHover.addEventListener("mouseout", this.changeOut.bind(this));
    }

    change(){
        this.elementHtmlAnimated.style.opacity = 0
        this.elementHtmlAnimatedToChange.style.opacity = 1
    }
    
    changeOut(){
        this.elementHtmlAnimated.style.opacity = 1
        this.elementHtmlAnimatedToChange.style.opacity = 0
    }
}

export default ChangeImg;