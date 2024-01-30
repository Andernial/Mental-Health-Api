import  express  from "express"
import { SiteRouter } from "./routes/Sites.js"
import { RelaxamentoRouter } from "./routes/Relaxamento.js"
import { MensagensRouter } from "./routes/Mensagens.js"
import { AdmRouter } from "./routes/adm.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(SiteRouter)
app.use(RelaxamentoRouter)
app.use(MensagensRouter)
app.use(AdmRouter)


app.listen(port, () => {
    console.log(`Funcionando na porta ${port}`)
})


