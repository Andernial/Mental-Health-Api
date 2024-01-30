import express from 'express';
import { selectRandomUrlMusic, selectRandomUrlSound } from '../controller/RelaxamentoController.js';
const RelaxamentoRouter = express.Router()

RelaxamentoRouter.get("/RelaxingMusic", (req, res) => {
        res.redirect(`${selectRandomUrlMusic()}`)
})

RelaxamentoRouter.get("/RelaxingSound", (req, res) => {
        res.redirect(`${selectRandomUrlSound()}`)
})

export { RelaxamentoRouter }