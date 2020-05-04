class Nav{
    constructor(element, number){
        this.element = document.getElementById(element);
        this.element.addEventListener("click", this.move.bind(this));
        document.addEventListener("scroll", this.font.bind(this));
        this.position = number;
        this.body = document.getElementById("body");
    }

    move(){
        scrollTo(0, this.body.scrollHeight / 4 * this.position);
    }

    font(){
        switch(scrollY){ 
            case 0:
                this.element.style.color = "white"
                this.element.style.fontFamily = "Source Sans Pro"
                this.element.style.fontSize = "18px"
            break;
            case this.body.scrollHeight / 4:
                this.element.style.color = "black"
                this.element.style.fontFamily = "Indie Flower"
                this.element.style.fontSize = "18px"
            break;
            case this.body.scrollHeight / 4 * 2:
                this.element.style.color = "#D7D7D7"
                this.element.style.fontFamily = 'Gloria Hallelujah'
                this.element.style.fontSize = "15px"
            break;
            case this.body.scrollHeight / 4 * 3:
                this.element.style.color = "#4C76A2"
                this.element.style.fontFamily = "Permanent Marker"
                this.element.style.fontSize = "15px"
            break;
        }
    }
}

export default Nav;