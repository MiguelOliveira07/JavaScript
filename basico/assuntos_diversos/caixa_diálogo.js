const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirme')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click', (evt) => {
    alert('Caixa de alerta')
})

btn_confirm.addEventListener('click', (evt) => {
    const ret = confirm('Você confirma que o site funciona?')

    if (ret) {
        console.log('Site está funcionando.')
    } else {
        console.log('Site NÃO está funcionando.')
    }
})

btn_prompt.addEventListener('click', (evt) => {
    const nome = prompt('digite seu nome:')

    if(nome == null){
        console.log('Botão CANCELAR pressionado')
    }else{
        console.log('Nome digitado: ' + nome)
    }
})