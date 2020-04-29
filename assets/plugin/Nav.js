class Nav{
    constructor(element, number){
        this.element = document.getElementById(element)
        this.element.addEventListener("click", this.move.bind(this))
        document.addEventListener("mouseover", this.font.bind(this))
        this.position = number;
    }

    move(){
        scrollTo(0, innerHeight * this.position)        
    }

    font(){
        switch(scrollY){
            case 0:
                this.element.style.color = "white"
                this.element.style.fontFamily = "Source sans pro"
            break;
            case innerHeight:
                this.element.style.color = "black"
                this.element.style.fontFamily = "Indie Flower"
            break;
            case innerHeight * 2:
                this.element.style.color = "#D7D7D7"
                this.element.style.fontFamily = 'Gloria Hallelujah'
            break;
            case innerHeight * 3:
                this.element.style.color = "#4C76A2"
                this.element.style.fontFamily = "Permanent Marker"
            break;
        }
    }
}

export default Nav