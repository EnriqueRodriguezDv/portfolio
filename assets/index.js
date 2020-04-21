const header = document.getElementById("header");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const footer = document.getElementById("footer");
var number = 1;

function scrollKey(){
    if(event.keyCode === 38 && number !== 1){
        number--;
        viewport(number);
    }
    if(event.keyCode === 40 && number !== 4){
        number++;
        viewport(number)
    }
}

function viewport(){
    switch(number){
        case 1:
            header.classList.remove("hidden");
            projects.classList.add("hidden");
            education.classList.add("hidden");
            footer.classList.add("hidden");
        break
        case 2:
            header.classList.add("hidden");
            projects.classList.remove("hidden");
            education.classList.add("hidden");
            footer.classList.add("hidden");
        break
        case 3:
            header.classList.add("hidden");
            projects.classList.add("hidden");
            education.classList.remove("hidden");
            footer.classList.add("hidden");
        break
        case 4:
            header.classList.add("hidden");
            projects.classList.add("hidden");
            education.classList.add("hidden");
            footer.classList.remove("hidden");
        break
    }
}