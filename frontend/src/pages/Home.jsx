import React from 'react'
import Navbar from '../components/Navbar'
import yappygoImage from '../assets/YappyGo_image.png'
import { FaRegMessage } from "react-icons/fa6";
import { CiRead } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <div>
        <Toaster/>
        <Navbar/>

        <div className='flex flex-col md:flex-row justify-between'>
            <div className='mt-[120px] md:mt-[1px]'>
                <div className='yappygo-message bg-blue-100 h-[120px] md:text-base text-xs w-[155px] md:w-[300px] p-[15px] font-bold '>
                    <p>Hola! i'm YappyGo, your secret is safe with me, yea. Just tell me when you need it and i'll give it back, hoohoo.</p>
                </div>
                <img src={yappygoImage} alt="" className='yappygo-image w-[150px] md:w-[280px] ml-[50px] md:ml-[400px] mt-[30px] ' />
            </div>
            <div className='flex flex-row md:flex-col gap-[70px] md:gap-[15px] items-center justify-center px-[30px] mt-[50px] md:mt-[1px] ml-[-35px] md:ml-[1px]'>
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
  )
}

export default Home