const btn = document.getElementById("btn_login")
const fetchtodo = "./data.json"

btn.addEventListener("click", async (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const response = await fetch(fetchtodo)
    const data = await response.json()

    console.log(email)
    const usuario_ativo = data.find(u => u.email === email)
    if (!usuario_ativo) {
        console.log("Usuario nao encontrado")
        
        return
    }
    if (usuario_ativo.senha === senha) {
        console.log("login")
        return   
    }

})

function sobre(){
    window.location.href = "sobre.html"
}