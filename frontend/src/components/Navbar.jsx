import React from 'react'
import yappygoLogo from '../assets/yappyGo_logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>

        <div className='flex px-[20px] py-[20px]'>
            <Link to='/'>
            <div className='cursor-pointer'>
                <img src={yappygoLogo} alt="" className='w-[100px]'/>
            </div>
            </Link>
        </div>


    </div>
  )
}

export default Navbar