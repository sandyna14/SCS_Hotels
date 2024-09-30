import 'dotenv/config'
import express from 'express'
function main(){ 
    const port = +process.env.APP_PORT ?? 4000;
    const app = express(); 
}
main();