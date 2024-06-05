const jsonServer=require('json-server')
const cors=require('cors')

const emsServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('data.json')

emsServer.use(cors())
emsServer.use(middleware)
emsServer.use(router)

const port=8000
emsServer.listen(port,()=>{
    console.log(`____EMS Server Started At Port ${port}___`);
})