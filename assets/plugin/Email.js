class Email{
    constructor(send){
        this.send = document.getElementById(send).addEventListener("click", this.sendEmail.bind(this));
    }
    
    sendEmail(){
        open('mailto:juanenriquerodriguezgarcia87@gmail.com')
    }
}

export default Email;