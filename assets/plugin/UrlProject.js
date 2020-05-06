class UrlProject {
    constructor(project, url, time){
        this.project = document.getElementById(project);
        this.url = url;
        this.time = time;
        this.project.addEventListener("click", this.travel.bind(this))
    }

    travel(){
        setTimeout(() => {
            window.location.href = this.url;
        }, this.time)
    }
}

export default UrlProject;