import express from "express"
import { returnUrl, returnUrlHelp } from "../controller/SitesController.js"
const SiteRouter = express.Router()

SiteRouter.get("/", (req, res) => {
    res.send('A mental health api tem o objetivo de ser uma api informativa e que traga maneiras de ajudar as pessoas que sofrem de transtornos mentais no Brasil, as rotas informativas focam em trazer mais atenção ao problema e aumentar o entendimento geral sobre como isso afeta a vida das pessoas no nosso país.')

})

SiteRouter.get("/Ajuda", (req, res) => {
    const SitesDeAjuda = returnUrlHelp()
    res.json({ SitesDeAjuda })
})

SiteRouter.get("/Abrangendo-tema", (req, res) => {
    const SitesInformativos = returnUrl()
    res.json({ SitesInformativos })

})



export { SiteRouter }