import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import yappygoImage from '../assets/YappyGo_image.png'
import { FaRegMessage } from "react-icons/fa6";
import { CiRead } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



const CreateMessage = () => {
    const [messageValue, setMessageValue] = useState('')
    const [uniqueCode, setUniqueCode] = useState('')
    const notify = () => toast.success('Secret secured successfully');

    const handleFormSubmit = async(e)=> {
            e.preventDefault();
        try {
              const response = await axios.post('http://localhost:3001/api/postmessages', {umessage:messageValue});
                
                const uCode = response.data.unique_code;
                setUniqueCode(uCode);
                notify();
                

        } catch (error) {
            console.error('An error occurred while posting the message')
        }
        setMessageValue('')
    }

  return (
    <div>
        
        <div>
        <Navbar/>

        <div className='flex flex-col md:flex-row justify-between'>
            <div  className='mt-[30px] md:mt-[1px]'>
                <div className='yappygo-messagecm bg-blue-100 h-[120px] md:text-base text-xs w-[155px] md:w-[300px] p-[15px] font-bold '>
                    <p>Secret code generated will be used to view your secret, please keep it safe.</p>
                </div>
                <img src={yappygoImage} alt="" className='yappygo-image  w-[150px] md:w-[280px] ml-[50px] md:ml-[20px] mt-[30px] ' />
            </div>

            <div className='mt-[50px] md:mt-[100px] ml-[40px] md:ml-[1px]'>
                <form onSubmit={handleFormSubmit}>
                    {uniqueCode ? <div>
                        <p className='bg-blue-100 w-[300px] md:w-[320px] mb-[20px] p-[10px]'>Secret Code: <span className='font-bold'>{uniqueCode}</span></p>
                    </div> : '' }
                    
                    <div className='w-[300px] md:w-[320px] height-[200px] overflow-y-auto bg-gray-200 rounded-xl '>
                        <textarea name="umessage" id="umessage"  value={messageValue} onChange={(e)=> setMessageValue(e.target.value)} className='w-[300px] p-[15px]  h-[150px] bg-transparent outline-none' placeholder="What's your secret?" />
                        
                    </div>

                    <button type="submit" className='w-[300px] md:w-[320px] bg-blue-500 text-white flex items-center gap-[15px] text-center justify-center py-[10px] px-[5px] rounded-xl mt-[20px]'>Secure Your Secret <span><IoMdSend /></span></button>

                </form>



            </div>
             


            <div className='flex flex-row md:flex-col gap-[70px] md:gap-[15px] items-center justify-center px-[30px] mt-[50px] md:mt-[1px] ml-[-35px] md:ml-[1px] mb-[20px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <NavLink to='/create-secret'>
                    <div className='bg-blue-400 p-[15px] rounded-full cursor-pointer hover:bg-blue-500'>
                    <FaRegMessage className='text-3xl md:text-2xl text-white' />
                    </div>
                    </NavLink>
                    <p className='mt-[-10px] text-xs text-gray-400 font-bold'>Create Secret</p>
                    </div>
                
                <div className='flex flex-col items-center gap-[20px]'>
                    <NavLink to='/view-secret'>
                    <div className='bg-blue-400 p-[15px] rounded-full cursor-pointer hover:bg-blue-500'>
                    <CiRead className='text-3xl md:text-2xl text-white' />
                    </div>
                    </NavLink>
                    <p className='mt-[-10px] text-xs text-gray-400 font-bold'>View Secret</p>
                </div>
                
            </div>
        </div>
    </div>


    </div>
  )
}

export default CreateMessage