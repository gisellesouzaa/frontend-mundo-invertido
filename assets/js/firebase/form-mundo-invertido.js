import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

//função para salvar informações no banco de dados
export async function subscribeFormMundoInvertido(subscription){
    const database = getFirestore(app)
    const collectionMundoInvert = collection (database, 'club-mundo-invertido')
    const docRef = await addDoc(collectionMundoInvert, subscription)
    return docRef.id
    // a função addDoc é assincrona por isso colocamos o 'await' e o async
}