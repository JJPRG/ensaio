const express = require("express") // A biblioteca Express simplifica a codificação - comparar com o arquivo "index_r1.js"
const path=require("path")
const app=express() // aqui criamos uma app que guarda a função da bibilioteca instanciada para tanto basta colocar os "()"  depois do
const router= express.Router()
// Utilizamos o path.join para juntar a parte inicial do caminho do arquivo. Quando vai para o servidor ele só pegará parte final sem pegar a o caminho da pasta atual.
// console.log(path.join(_dirname+ "/pages/home.html"))

// criando as rotas ( neste caso é como se fossem as chamadas para as páginas criadas)

router.get("/",(req,res)=> {
    res.sendFile((path.join(__dirname + "/pages/home.html")))
})
router.get("/contato",(req,res)=> {
    res.sendFile((path.join(__dirname + "/pages/contato.html")))
})
app.use(router) // passamos as rotas para a aplicação "app"( Obs: pode ser outro nome difente de "app" eu usei "app")
// agora faremos a "app" ouvir as requestes.
var tst=__dirname
app.listen(3333, ()=>{
    console.log("Servidor Rodando!"+tst)
})