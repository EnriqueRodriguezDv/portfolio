class ScrollScreen {
    constructor(element){
        this.element = document.getElementById(element);
        this.element.style.maxWidth = innerWidth;
    }
}

export default ScrollScreen;