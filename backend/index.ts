import express from 'express';
import config from './config/default';
import db from './models';

const port = config.port;
const host = config.host;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

db.sequelize.sync().then(()=>{
    app.listen(port, host,()=>{
        console.log(`server listennig at http://${host}:${port}`);
        
    });
});


