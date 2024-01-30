import express from "express"
import { createAdm, deletePost, verifyAdm ,deleteAdm} from "../controller/AdmController.js"
const AdmRouter = express.Router()

AdmRouter.post('/Create-adm', (req, res) => {
    const { name, password } = req.body
    const createnewAdm = createAdm(name, password)
    res.json({ createnewAdm })

})

AdmRouter.get('/Show-adm', (req, res) => {
    const { name, password } = req.body
    const verificado = verifyAdm(name, password)
    res.json({ verificado })


})

AdmRouter.delete('/Delete-adm', (req, res) => {
    const { name, password, admName } = req.body
    const deleteSelectedAdm = deleteAdm(name, password, admName)

    res.json({ deleteSelectedAdm })

})

AdmRouter.delete('/Delete-post', (req, res) => {
    const { name, password, Id } = req.body
    const deleteSelectedPost = deletePost(name, password, Id)

    res.json({ deleteSelectedPost })

})

export { AdmRouter }