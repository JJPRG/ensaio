const jhttp=require("http") // passou o nome do módulo a ser utilizado neste caso o "http", para a constante "http" poderia ter outro nome vou mudar para jhttp.
const hostname="localhost" // neste caso estamos usando a minha própria máquina (o modo local) para hospedar a aplicação -  servidor
const port=3333 
const server=jhttp.createServer((req,res)=>{
res.setHeader("content-type", "text/plain")
res.end("Hello World")

})
server.listen(port,hostname,()=>{
    console.log("SERVIDOR RODANDO")
})