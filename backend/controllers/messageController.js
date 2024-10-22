import {db} from '../configs/db.js'
import crypto from 'crypto';

export const getMessages = async (req, res)=> {
    const {ucode }= req.body;
    
    try {
        
        const response = await db.query('SELECT * FROM messages WHERE unique_code=$1', [ucode]);
        if(response.rows.length < 1){
            return res.json({msg: `no message(s) available for this code`})
        }
            const message = response.rows[0].message_content;
    
        res.json({message})
        
    } catch (error) {
        console.error('error fetching data');
        res.json({msg: 'An error occurred while fetching data'})
    }
   
    
}


export const postMessages =  async (req, res)=> {
    const {umessage} = req.body;

    try {
        if(!umessage){
            return res.json({msg:"field cannot be empty"});
        }

        const uniqueCode = crypto.randomBytes(8).toString('hex');

        db.query('INSERT INTO messages (message_content, unique_code) VALUES ($1, $2)', [umessage, uniqueCode]);

        res.json({unique_code: uniqueCode})




    } catch (error) {
        console.error('error adding message to the database');
        res.json({msg: 'an error occurred while adding message'})
    }
}