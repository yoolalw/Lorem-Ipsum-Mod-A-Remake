const btn = document.getElementById("btn_login")
const fetchtodo = "./data.json"
const msg = document.getElementById("msg")

msg.style.display = "none"
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
        msg.style.display = "block"
        return
    }
    if (usuario_ativo.senha === senha) {
        console.log("login")
        localStorage.setItem("token", usuario_ativo.token)
        localStorage.setItem("nome", usuario_ativo.nome)
        
        console.log(localStorage.getItem("token"))
        msg.style.display = "none"
        return
    } else {
        msg.textContent = "Senha incorreta."
        msg.style.display = "block"
    }

})

function sobre() {
    window.location.href = "sobre.html"
}