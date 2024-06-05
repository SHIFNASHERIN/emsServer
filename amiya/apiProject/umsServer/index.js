const json_server=require('json-server')
const cors=require('cors')

// create json server
const umsApp=json_server.create()

// create a middleware for json-js data conversion
const middleware=json_server.defaults()

// create route for connect json file with main file (index.js)
const route=json_server.router('user.json')


// apply cors
umsApp.use(cors())

// apply middleware as application specific middleware
umsApp.use(middleware)

// apply route
umsApp.use(route)

const PORT=8001
umsApp.listen(PORT,()=>{
    console.log(`___UMS server Started at ${PORT}___`);
})


