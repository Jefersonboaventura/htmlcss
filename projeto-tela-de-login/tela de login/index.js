function pegarDados(){
let email = document.getElementById("iemail").value;
let senha = document.getElementById("isenha").value;
let menssagem = document.getElementById("menssagem")

if (email === "jeferson.souza95@gmail.com" && senha === "12345678"){

}else{
    console.log("usuário e senha inválidos");
    menssagem.textContent = "Usuários ou senha inválidos";
}
}

