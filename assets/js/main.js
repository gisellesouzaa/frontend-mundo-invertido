import { subscribeFormMundoInvertido } from "./firebase/form-mundo-invertido.js"

//pegar as informações do formulário ao clicar no botão
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        caracter: txtCharacter.value
        
    }

    //Salvar no Banco de dados através da função criada no arquivo 'form-mundo-invertido.js'
    const subscriptionId = await subscribeFormMundoInvertido(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    alert('Inscrito com sucesso!')
})

