import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'
import crypto from 'crypto';
import {db} from '../backend/configs/db.js'
import messageRoutes from './routes/messageRoutes.js'


const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', messageRoutes)


app.get('/', (req,res)=> {
    res.send('welcome to the secret page')
})






db.connect((err)=> {
    if(err){
      console.err('error connecting to the database', err.stack)
    } else{
        console.log('database connected successfully'); 
    }
})







app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})
