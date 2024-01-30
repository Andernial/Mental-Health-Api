import { Mensagem } from "../model/MensagensDeApoioModels.js";
import { readFile } from 'fs/promises'
import fs from "fs"

const filePath = new URL('../MensagensBanco.json', import.meta.url);
const data = await readFile(filePath, 'utf-8');
const jsonData = JSON.parse(data);

let messagelist = jsonData



function salvaMensagens(caminho, objeto) {

    let dados = JSON.stringify(objeto, null, 2)

    fs.writeFile(caminho, dados, (err) => {
        if (err) throw (err)
        console.log('Arquivo adicionado com sucesso!');
    })

}



function createNewMessage(Id, Author, Message) {
    let message = new Mensagem(Id, Author, Message)
    messagelist.push(message)
    salvaMensagens('MensagensBanco.json', messagelist)
    console.log("mensagem adicionada com sucesso")
    return message

}

function addLike(Id, like) {
    let valor = messagelist.find(data => data.Id === Id)
    if (valor) {
        const index = messagelist.findIndex(data => data.Id === Id)
        messagelist[index].likes = messagelist[index].likes + like
        salvaMensagens('MensagensBanco.json', messagelist)
        console.log("like adicionado !")
        return valor
    }

    return 'mensagem não encontrada !'
}



export { createNewMessage, addLike, messagelist, salvaMensagens }