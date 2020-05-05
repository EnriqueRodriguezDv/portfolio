class EducationBox {
    constructor(textHtmlElement, htmlElement){
        this.htmlElementHover = document.getElementById(textHtmlElement);
        this.htmlElementBox = document.getElementsByClassName(htmlElement);
        this.htmlElementHover.addEventListener("mouseover", this.show.bind(this))
        this.htmlElementHover.addEventListener("mouseout", this.showOut.bind(this))
        this.containerElement = document.getElementById("education__dev")
    }

    show(){
        for(let i = 0; i < this.htmlElementBox.length; i++){
            this.containerElement.style.opacity = 1
            this.htmlElementBox[i].classList.remove("hidden")
        }
    }

    showOut(){
        for(let i = 0; i < this.htmlElementBox.length; i++){
            this.containerElement.style.opacity = 0
            this.htmlElementBox[i].classList.add("hidden")
        }
    }
}


export default EducationBox;