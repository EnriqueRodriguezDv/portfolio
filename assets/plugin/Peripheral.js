class Peripheral{
    constructor(eve, attrEvent, codeUp, codeDown){
        document.addEventListener(eve, this.ALittleTramp.bind(this));
        this.attrEvent = attrEvent;
        this.codeUp = codeUp;
        this.codeDown = codeDown;
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
            case 3:
                console.log(event)
            break;
        }
        this.move(itsATramp);
    }

    move(itsATramp){
        if(itsATramp === this.codeUp){
            for(let i = 0; i < 4; i++){
                if(scrollY === innerHeight * i){
                    scrollTo(0, innerHeight * (i - 1))
                }
            }
        } else if (itsATramp === this.codeDown){
            for(let i = 0; i < 4; i++){
                if(scrollY === innerHeight * i){
                    scrollTo(0, innerHeight * (i + 1))
                }
            }
        }   
    }
}

export default Peripheral;