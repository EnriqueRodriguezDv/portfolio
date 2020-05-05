class Peripheral{
    constructor(eve, attrEvent, codeUp, codeDown){
        this.eve = eve;
        document.addEventListener(eve, this.ALittleTramp.bind(this));
        this.attrEvent = attrEvent;
        this.codeUp = codeUp;
        this.codeDown = codeDown;
        this.body = document.getElementById("body")
        this.array = [];
    }

    ALittleTramp(){
        let itsATramp = null;
        switch(this.attrEvent){
            case 1:
                itsATramp = event.keyCode
                this.move(itsATramp);
            break;
            case 2:
                itsATramp = event.deltaY
                this.move(itsATramp);
            break;
            case 3:
                this.touchmove()
            break;
        }
        
    }

    move(itsATramp){
        if(itsATramp === this.codeUp){
            for(let i = 0; i < 4; i++){
                if(scrollY === this.body.scrollHeight / 4 * i){
                    scrollTo(0, this.body.scrollHeight / 4 * (i - 1))
                }
            }
        } else if (itsATramp === this.codeDown){
            for(let i = 0; i < 4; i++){
                if(scrollY === this.body.scrollHeight / 4 * i){
                    scrollTo(0, this.body.scrollHeight / 4 * (i + 1))
                }
            }
        }   
    }

    touchmove(){ 
        this.array.push(event.touches[0].pageY)
        if(this.array[7] < this.array[this.array.length - 1]){
            for(let i = 0; i < 4; i++){
                if(scrollY === this.body.scrollHeight / 4 * i){
                    scrollTo(0, this.body.scrollHeight / 4 * (i - 1))
                }
            }  
        } else if (this.array[7] > this.array[this.array.length - 1]){
            for(let i = 0; i < 4; i++){
                if(scrollY === this.body.scrollHeight / 4 * i){
                    scrollTo(0, this.body.scrollHeight / 4 * (i + 1))
                }
            }
        }
        document.addEventListener("touchend", () => {
            for (let index = 0; index < this.array.length; index++) {
                this.array.pop()                   
            }
        })
    }
}

export default Peripheral;