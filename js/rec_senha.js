container.innerHTML = `
        <img src="img/lorem_logo.png" class="size-[200px]">

        <div class="justify-center align-middle items-center m-auto flex">
            <h1 class="font-serif text-gray-600 text-[50px]">Insira seu email para <br> recuperar sua senha!</h1>
        </div>

        <div class="box-input flex flex-col border-1 rounded-xl mt-10 border-gray-400 w-[350px]">
            <label class="ml-3 font-serif text-gray-800 mt-2" for="email">Email</label>
            <input type="email" id="email" class="ml-3 h-[40px]" placeholder="email@example.com">
        </div>

        <button type="button" id="btn" class="mt-10 bg-[#1c365e] h-[40px] w-[300px] rounded-xl font-serif
            text-blue-100 hover:bg-blue-300 cursor-pointer">Enviar</button>
`

const btn = document.getElementById("btn")
const json = "./data.json"
btn.addEventListener("click", async (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const response = await fetch(json)
    const data = await response.json()

    const usuario_ativo = data.find(u => u.email === email)
    if (usuario_ativo) {

        container.innerHTML = `
            <img src="img/lorem_logo.png" class="size-[200px]">

        <div class="justify-center align-middle items-center m-auto flex">
            <h1 class="font-serif text-gray-600 text-[50px]">Atualize sua senha!</h1>
        </div>

        <div class="box-input flex flex-col border-1 rounded-xl mt-10 border-gray-400 w-[350px]">
            <label class="ml-3 font-serif text-gray-800 mt-2" for="senha">Nova senha</label>
            <input type="text" id="senha" class="ml-3 h-[40px]">
        </div>

        <div class="box-input flex flex-col border-1 rounded-xl mt-10 border-gray-400 w-[350px]">
            <label class="ml-3 font-serif text-gray-800 mt-2" for="senha">Confirmar senha</label>
            <input type="text" id="confirmada" class="ml-3 h-[40px]">
        </div>

        <button type="button" id="alterar" class="mt-10 bg-[#1c365e] h-[40px] w-[300px] rounded-xl font-serif
            text-blue-100 hover:bg-blue-300 cursor-pointer">Alterar</button>
                    <h2 class="mt-10 bg-red-100 h-[50px] justify-center align-middle items-center m-auto text-center flex w-[200px] rounded-xl shadow-xl"
            id="msg">Ambas informações estao incorretas.</h2>
            `

        const alterar = document.getElementById("alterar")

        const msg = document.getElementById("msg")
        msg.style.display = "none"
        alterar.addEventListener("click", (e) => {
            e.preventDefault()
            const senha = document.getElementById("senha").value
            const confSenha = document.getElementById("confirmada").value
            if (senha === confSenha) {
                msg.style.display = "none"
                localStorage.setItem("senha", confSenha)
                setTimeout(() => {
                    window.location.href = "login.html"
                }, 3000)
            } else {
                msg.textContent = "As senhas nao coincidem."

                msg.style.display = "block"
            }
        })
    }




})