import express from "express";
import { createNewMessage, messagelist, addLike} from "../controller/MensagensController.js";
const MensagensRouter = express.Router();


MensagensRouter.post("/Add-Message", (req, res) => {
    const {Id,Author, Message} = req.body
    const newMessage = createNewMessage(Id,Author,Message)
    res.json({newMessage})
})

MensagensRouter.put("/Add-Like", (req, res) => {
    const {Id,Likes} = req.body
    const newLike = addLike(Id,Likes)
    res.json({newLike})
})

MensagensRouter.get("/MensagemsDeApoio", (req,res) =>{
    res.json({messagelist})
})

export {MensagensRouter}