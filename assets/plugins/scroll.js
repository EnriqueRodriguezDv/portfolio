class Scroll{ 
    constructor(config){
        this.body = config.thisBody;
        this.header = config.thisHeader;
        this.projects = config.thisProjects;
        this.education = config.thisEducation;
        this.footer = config.thisFooter;
        this.navProjects = config.thisNavProjects;
        this.navEducation = config.thisNavEducation;
        this.navContact = config.thisNavContact;
        this.number = 1;
        this.scrollKey();
        this.scrollMouse();
        this.nav();
        // console.log(this.navEducation, this.navContact)
    }
    
    scrollKey(){
        this.body.onkeydown = () => {
            if(event.keyCode === 38 && this.number !== 1){
                this.number--;
                this.viewport(this.number);
            }
            if(event.keyCode === 40 && this.number !== 4){
                this.number++;
                this.viewport(this.number)
            }
        }
    }

    scrollMouse(){
        this.body.onmousewheel = () => {
            if(event.deltaY === -100 && this.number !== 1){
                this.number--;
                this.viewport(this.number);
            }
            if(event.deltaY === 100 && this.number !== 4){
                this.number++;
                this.viewport(this.number)
            } 
        }
    }

    nav(){
        this.navProjects.onclick = () => {
            this.number = 2;
            this.viewport();
        }
        this.navEducation.onclick = () => {
            this.number = 3;
            this.viewport();
        }
        this.navContact.onclick = () => {
            this.number = 4;
            this.viewport();
        }
    }

    viewport(){
        switch(this.number){
            case 1:
                window.scrollTo(0,0)
            break
            case 2:
                window.scrollTo(0,innerHeight)
            break
            case 3:
                window.scrollTo(0,innerHeight * 2)
            break
            case 4:
                window.scrollTo(0,innerHeight * 3)
            break
        }
    }
}


export default Scroll;