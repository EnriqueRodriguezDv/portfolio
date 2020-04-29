import Animation from "../Animation.js";

class ChangeImg extends Animation{
    constructor(elementHtmlHover, elementHtmlAnimated, elementHtmlAnimatedToChange){
        super(elementHtmlHover, elementHtmlAnimated);
        this.elementHtmlAnimatedToChange = document.getElementById(elementHtmlAnimatedToChange);
        this.elementHtmlHover.addEventListener("mouseover", this.change.bind(this));
        this.elementHtmlHover.addEventListener("mouseout", this.changeOut.bind(this));
    }

    change(){
        this.elementHtmlAnimated.classList.add("hidden");
        this.elementHtmlAnimatedToChange.classList.remove("hidden");
    }
    
    changeOut(){
        this.elementHtmlAnimated.classList.remove("hidden");
        this.elementHtmlAnimatedToChange.classList.add("hidden");
    }
}

export default ChangeImg;