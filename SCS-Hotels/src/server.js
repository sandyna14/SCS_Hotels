import morgan from 'morgan';
import http from 'http';
import 'dotenv/config'
import express from 'express'
import authRouter from './routes/auth.routes.js';
function main(){ 
    const port = +process.env.APP_PORT ?? 4000;
    const app = express(); 

    app.use(morgan('dev'))
    const httpServer = http.createServer(app);
    app.get('/',(req,res) =>{
        res.send('Hola mundo!')
    })
    
    httpServer.listen(port, ()=> {
    console.log('Server running on port: ' , port)
});
}
main();