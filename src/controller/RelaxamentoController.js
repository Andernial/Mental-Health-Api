import { readFile } from 'fs/promises'

const filePath = new URL('../Dados.json', import.meta.url);
const data = await readFile(filePath, 'utf-8');
const jsonData = JSON.parse(data);



let musicArray = jsonData.urls
let soundUrl = jsonData.soundUrls

function selectRandomUrlMusic() {

    let randomNumber = Math.floor(Math.random() * (musicArray.length))
    let selectedUrl = musicArray[randomNumber]
    return selectedUrl

}

function selectRandomUrlSound() {

    let randomNumber = Math.floor(Math.random() * (soundUrl.length))
    let selectedUrl = soundUrl[randomNumber]
    return selectedUrl
}



export { selectRandomUrlMusic, selectRandomUrlSound }