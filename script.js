
let emailRegistro = ""
let senhaRegistro = ""

/*Registro */

function cadastrar(){
    
    nomeR = document.getElementById('nomeR');
    emailR = document.getElementById('emailR');
    senhaR = document.getElementById('senhaR');
    confirmaSenhaR = document.getElementById('confirmaSenhaR').value;

    emailRegistro = emailR.value;
    senhaRegistro = senhaR.value;

    if(nomeR.value.trim() == "" || emailR.value.trim() == "" || senhaR.value.trim() == "" || confirmaSenhaR.trim() == "") {

        window.alert("Preencha todos os campos")

    } else {
        if(emailR.value == "adm2002@gmail.com") {

            window.alert("Conta Privada")

        } else {
            //Aqui vai o if se ja tem a conta cadastrada
            if(senhaR.value == confirmaSenhaR) {

                fetch("http://localhost:8080/cadastrarUsuario",
                    {

                        method: 'POST',
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        },

                        body: JSON.stringify({
                            nome :  nomeR.value,
                            email : emailR.value,
                            senha : senhaR.value
                        })

                    })

                    .then(function(res) {if (res.status=200){alert ("Cadastro realizado")}})
                    .catch(function(res) {console.log(res)}) 

                    limparCadastro();

                    document.querySelector('.Login').style.display='block';
                    document.querySelector('.Registro').style.display='none';
                    document.querySelector('.ResgatarSenha').style.display='none';

            } else {

                window.alert("Senhas não correspondentes")

            }

        }

    }
} 

/*Login */

function logar(emailL, senhaL){

    if (emailL.trim() != "" && senhaL.trim() != "") {

        if(emailL == "adm2002@gmail.com" && senhaL == "2002") {

            location.href = "index.html"
    
        } 
    }
}
function entrar(){

    let emailL = document.getElementById('emailL').value;
    let senhaL = document.getElementById('senhaL').value;

    if(emailL.trim() == "" || senhaL.trim () == "") {

        window.alert("Preencha os campos")

    }

    logar(emailL, senhaL)
    
}

/*Recados */

function faleConosco(){
    
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let ddd = document.getElementById('ddd').value;
    let numero = document.getElementById('numero').value;
    let recado = document.getElementById('recado');

    let telefone = ddd + " " + numero

    if(nome.value.trim() == "" || email.value.trim () == "" || ddd == "" || numero.trim() == "" || recado.value.trim() == "") {

        window.alert("Preencha todos os campos")

    } else {

        fetch("http://localhost:8080/adicionarRecado",
        {

            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify({
                nome :  nome.value,
                email : email.value,
                telefone : telefone,
                recado : recado.value
            })

        })

        .then(function(res) {if (res.status=200){alert ("Recado enviado")}})
        .catch(function(res) {console.log(res)})

        limparRecado()

    }

    
}

function mostrarSenhaL(){
    document.getElementById ("senhaL"). type = "text";
    document.querySelector('#esconderSenhaL').style.display='block';
    document.querySelector('#mostrarSenhaL').style.display='none';
}
function esconderSenhaL(){
    document.getElementById ("senhaL"). type = "password";
    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
}

function mostrarSenhaR(){
    document.getElementById ("senhaR"). type = "text";
    document.querySelector('#esconderSenhaR').style.display='block';
    document.querySelector('#mostrarSenhaR').style.display='none';
}
function esconderSenhaR(){
    document.getElementById ("senhaR"). type = "password";
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
}

function mostrarconfirmaSenhaR() {
    document.getElementById ("confirmaSenhaR"). type = "text";
    document.querySelector('#esconderconfirmaSenhaR').style.display='block';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='none';
}

function esconderconfirmaSenhaR() {
    document.getElementById ("confirmaSenhaR"). type = "password";
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}

function mostrarLogin() {
    document.querySelector('.Login').style.display='block';
    document.querySelector('.Registro').style.display='none';
    document.querySelector('.ResgatarSenha').style.display='none';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}
function mostrarRegistro() {
    document.querySelector('.Login').style.display='none';
    document.querySelector('.Registro').style.display='block';
    document.querySelector('.ResgatarSenha').style.display='none';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}
function mostrarResgatarSenha() {
    document.querySelector('.Login').style.display='none';
    document.querySelector('.Registro').style.display='none';
    document.querySelector('.ResgatarSenha').style.display='block';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}

function resgatarSenha() {
    let emailResgate = document.getElementById('emailResgate').value;

    if(emailResgate.trim() == "") {
        window.alert("Preencha o campo")
    } else {

        let loginValido = 0
        for (let i = 0; i < bancoDeCadastro.length; i++) {
            if(emailResgate == emailVerificacao[i]) {
                loginValido++
            }
        }

        if(emailResgate == "adm2002@gmail.com") {
            window.alert("Conta privada")
            document.getElementById('emailResgate').value =""
        } else {

            if(loginValido == 0) {
                window.alert("Conta não registrada")
            } else {
                window.alert("Aguarde o código de verificação")
                document.getElementById('emailResgate').value =""
    
                document.querySelector('.Login').style.display='block';
                document.querySelector('.Registro').style.display='none';
                document.querySelector('.ResgatarSenha').style.display='none';
            }

        }
        
    }
}
function limparRecado() {
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('ddd').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('recado').value = ""
}
function limparCadastro() {
    document.getElementById('nomeR').value = ""
    document.getElementById('emailR').value = ""
    document.getElementById('senhaR').value = ""
    document.getElementById('confirmaSenhaR').value = ""
}