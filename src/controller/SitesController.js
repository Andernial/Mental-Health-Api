import { readFile } from 'fs/promises'

const filePath = new URL('../Dados.json', import.meta.url);
const data = await readFile(filePath, 'utf-8');
const jsonData = JSON.parse(data);


function returnUrl() {
    let url = jsonData.Sites
    return url
}


function returnUrlHelp() {
    let url = jsonData.sitesDeAjuda
    return url
}


export { returnUrl, returnUrlHelp }