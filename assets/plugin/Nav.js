class Nav{
    constructor(element, number){
        document.getElementById(element).addEventListener("click", this.move.bind(this))
        this.position = number;
    }

    move(){
        scrollTo(0, innerHeight * this.position)
    }
}

export default Nav