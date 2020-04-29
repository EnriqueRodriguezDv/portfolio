class EducationBox {
    constructor(htmlElement){
        this.htmlElementHover = document.getElementById(htmlElement);
        this.htmlElementBox = document.getElementsByClassName(htmlElement);
        this.htmlElementHover.addEventListener("mouseover", this.show.bind(this))
        this.htmlElementHover.addEventListener("mouseout", this.showOut.bind(this))
    }

    show(){
        for(let i = 0; i < this.htmlElementBox.length; i++){
            this.htmlElementBox[i].classList.remove("hidden");
        }
    }

    showOut(){
        for(let i = 0; i < this.htmlElementBox.length; i++){
            this.htmlElementBox[i].classList.add("hidden");
        }
    }
}


export default EducationBox;