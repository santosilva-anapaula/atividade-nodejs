const usuario = {
    nome: "Ana",
    sobrenome: "Santos",
    dataNascimento: "27/09/1994",
    email: "email@email.com",
    senha: "123abc",

    saudacao: function(){
        return `Seja bem vindo(a): ${this.nome} ${this.sobrenome}`;
    },

    login: function(emailDigitado, senhaDigitada){
        if(emailDigitado === this.email && senhaDigitada === this.senha){
            return this.saudacao();
        }else{
            return "Login e/ou senha errados, tente novamente!";
        }
    }

};

const prompt = require('prompt-sync')();
let emailDigitado = prompt("Email: ");
let senhaDigitada = prompt("Senha: ");

console.log(usuario.login(emailDigitado, senhaDigitada));