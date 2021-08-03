import express, { query } from 'express';
import config from '../config/default';
import db from '../models';
import {transactions} from '../seeders/transactions';
import dotenv from 'dotenv';
import { Op } from "sequelize";
dotenv.config();
const port =  3003;
const host = process.env.HOST || 'localhost';
const app = express();
const router = express.Router();
console.log(process.env.PORT);

const createTransactions = ()=>{
    transactions.map(transaction => {
        db.Transaction.create(transaction)
    })
}

app.use(express.json());
app.use(express.urlencoded({extended : false}));
router.get('/transactions',(req,res)=>{
    const query = req.query;
    const headers = req.headers;
    const per_page: any = query.per_page;
    const page: any = query.page;
    const offset  = (per_page * (page - 1)) ;
    if(headers.Token !== 'ABC'){
        res.sendStatus(401);
    }else{
        db.Transaction.findAll({
            attributes: ['id','title','image','price','last_updated'],
            where: {'sellerId' :query.seller_id,'last_updated':{[Op.gte]:query.date_range}},
            limit: query.per_page,
            offset: offset
        })
        .then((result: any)=>{
            res.status(200).send({data:result,paging:{total:result.length,current_page:page,per_page}});
        }).catch((err: any)=>{
            console.log('error: ' + err);
            res.sendStatus(404)
            
        });
    }
});
app.use(router);
// createTransactions();
// db.sequelize.sync().then(()=>{
    console.log("database connected successfully");
    app.listen(port, host,()=>{
        console.log(`server listennig at http://${host}:${port}`);
        
    });
// });


