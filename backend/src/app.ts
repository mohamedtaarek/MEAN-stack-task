import express from 'express';
import config from '../config/default';
import db from '../models';
import {transactions} from '../seeders/transactions';
const port = config.port;
const host = config.host;
const app = express();

const createTransactions = ()=>{
    transactions.map(transaction => {
        db.Transaction.create(transaction)
    })
}

app.use(express.json());
app.use(express.urlencoded({extended : false}));

createTransactions();
db.sequelize.sync().then(()=>{
    console.log("database connected successfully");
    app.listen(port, host,()=>{
        console.log(`server listennig at http://${host}:${port}`);
        
    });
});


