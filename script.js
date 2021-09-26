const email=document.getElementById("email")
const senha=document.getElementById("senha")
const erro=document.getElementById("erro")

const botao=document.getElementById("botao")

botao.addEventListener("click",function(e) {
    e.preventDefault()

    const emailValor=email.value
    const senhaValor=senha.value

    if(emailValor == "" ||senhaValor == ""){
        erro.textContent="Por favor, completar todos os campos."
        erro.classList="erro"
        return
    }
    
})