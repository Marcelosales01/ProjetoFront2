function logar(){
    let login = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(login == "admin@gmail.com" && senha == "admin123"){
        alert('Sucesso');
        location.href = "areaAdmin.html";
    }else{
        alert("Usuario ou senha incorretos")
    }
}
















