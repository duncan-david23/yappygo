import express from 'express'
import { getMessages,  postMessages } from '../controllers/messageController.js';

const router = express.Router();


router.post('/getmessages', getMessages);
router.post('/postmessages', postMessages);



export default router;