import { Adm } from "../model/AdmModels.js";
import { messagelist, salvaMensagens } from "./MensagensController.js";
import { readFile } from 'fs/promises'
import fs from "fs"

const filePath = new URL('../AdmsBanco.json', import.meta.url);
const data = await readFile(filePath, 'utf-8');
const jsonData = JSON.parse(data);



let admList = jsonData


function salvaDados(caminho, objeto) {

    let dados = JSON.stringify(objeto, null, 2)

    fs.writeFile(caminho, dados, (err) => {
        if (err) throw (err)
        console.log('Arquivo alterado com sucesso!');
    })

}

function createAdm(name, password) {
    let novoAdm = new Adm(name, password)
    admList.push(novoAdm)
    salvaDados("AdmsBanco.json", admList)
    console.log("Administrador Criado !")
    return novoAdm
}

function verifyAdm(name, password) {
    let adm = admList.find(data => data.name === name && data.password === password)
    if (adm) {
        return admList
    }
    return 'usuario não é adm !'
}

function deletePost(name, password, Id) {
    let adm = admList.find(data => data.name === name && data.password === password)
    if (adm) {
        let post = messagelist.findIndex(data => data.Id === Id)
        messagelist.splice(post, 1)
        salvaMensagens('MensagensBanco.json', messagelist)

        return messagelist
    }

    return 'o usuario não é ADM !'
}

function deleteAdm(name, password, admName) {
    let adm = admList.find(data => data.name === name && data.password === password)
    if (adm) {
        let post = admList.findIndex(data => data.name === admName)
        admList.splice(post, 1)
        salvaDados('AdmsBanco.json', admList)

        return admList
    }

    return 'o usuario não é ADM !'
}




export { createAdm, deletePost, verifyAdm , deleteAdm}