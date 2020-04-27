class Nav{
    constructor(element, number){
        this.url = document.getElementById(element).addEventListener("click", this.move.bind(this))
        this.position = number;
    }

    move(){
        scrollTo(0, innerHeight * this.position)
    }
}

export default Nav