class Animation{
    constructor(elementHtmlHover, elementHtmlAnimated, eventAnimation){
        this.elementHtmlHover = document.getElementById(elementHtmlHover);
        this.elementHtmlAnimated = document.getElementById(elementHtmlAnimated);
        this.caseEventAnimation = eventAnimation;
        this.elementHtmlHover.addEventListener("mouseenter", this.selectAnimation.bind(this));
    }

    selectAnimation(){
        switch(this.caseEventAnimation){
            case 1:
                this.shoot()
            break;
            case 2: 
                this.fly()
            break;
        }
    }

    shoot(){
        this.elementHtmlAnimated.classList.remove("hidden");
        this.elementHtmlAnimated.style.position = "absolute";
        let time = 30;
        let repeat = 40;
        for(let i = 0; i < repeat; i++){
            setTimeout( () => {
                this.elementHtmlAnimated.style.left = (50 + i * 50) + "px";
            },time * i)
            setTimeout( () => {
                this.elementHtmlAnimated.style.position = "initial";
                this.elementHtmlAnimated.classList.add("hidden");
            },time * repeat + time * i)
            setTimeout(()=>{
                location.href = "https://enriquerodriguezdv.github.io/spaceship/index.html"
            }, time * repeat + time * i * 2)
        }
    }

    fly(){
        let movement = 50;
        let time = 30;
        let repeat = 40;
        this.elementHtmlAnimated.style.position = "absolute";
        for(let i = 0; i < repeat; i++){
            setTimeout(() => {
                this.elementHtmlAnimated.style.right = i + movement + "px";
                this.elementHtmlAnimated.style.top = i + movement + "px";
            }, time * i)
            setTimeout(() => {
                this.elementHtmlAnimated.style.right = -i * movement + movement + "px";
                this.elementHtmlAnimated.style.top = -i * movement + movement + "px";
            },time * repeat + time * i)
            setTimeout(() => {
                this.elementHtmlAnimated.style.position = "initial";
            },time * (2 * repeat) + time * i)
        }
    }
}

export default Animation;