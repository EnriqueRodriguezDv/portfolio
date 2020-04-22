class Scroll{ 
    constructor(config){
        this.body = config.thisBody;
        this.header = config.thisHeader;
        this.projects = config.thisProjects;
        this.education = config.thisEducation;
        this.footer = config.thisFooter;
        this.number = 1;
        this.scrollKey();
        this.scrollMouse();
        // console.log(this.header, this.projects, this.education, this.footer)
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

    viewport(){
        switch(this.number){
            case 1:
                this.header.classList.remove("hidden");
                this.projects.classList.add("hidden");
                this.education.classList.add("hidden");
                this.footer.classList.add("hidden");
            break
            case 2:
                this.header.classList.add("hidden");
                this.projects.classList.remove("hidden");
                this.education.classList.add("hidden");
                this.footer.classList.add("hidden");
            break
            case 3:
                this.header.classList.add("hidden");
                this.projects.classList.add("hidden");
                this.education.classList.remove("hidden");
                this.footer.classList.add("hidden");
            break
            case 4:
                this.header.classList.add("hidden");
                this.projects.classList.add("hidden");
                this.education.classList.add("hidden");
                this.footer.classList.remove("hidden");
            break
        }
    }
}


export default Scroll;