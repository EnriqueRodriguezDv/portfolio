class Peripheral{
    constructor(eve, attrEvent, codeUp, codeDown){
        this.attrEvent = attrEvent;
        this.codeUp = codeUp;
        this.codeDown = codeDown;
        this.eve = document.addEventListener(eve, this.ALittleTramp.bind(this)) ;
        console.log("hi")
    }

    ALittleTramp(){
        let itsATramp = null;
        switch(this.attrEvent){
            case 1:
                itsATramp = event.keyCode
            break;
            case 2:
                itsATramp = event.deltaY
            break;
        }
        this.move(itsATramp);
    }

    move(itsATramp){
        if(itsATramp === this.codeUp){
            console.log("up")
            for(let i = 0; i < 4; i++){
                if(scrollY === innerHeight * i){
                    scrollTo(0, innerHeight * (i - 1))
                }
            }
        } else if (itsATramp === this.codeDown){
            console.log("down")
            for(let i = 0; i < 4; i++){
                if(scrollY === innerHeight * i){
                    scrollTo(0, innerHeight * (i + 1))
                }
            }
        }   
    }
}

export default Peripheral;