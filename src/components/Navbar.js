import React from 'react'
<<<<<<< HEAD
import Logo from '../assets/Logo.svg'
import { useState } from 'react'
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast"

export default function Navbar({login,setLogin}) {

    





  return (
    <div className='flex  w-11/12 mx-auto text-white justify-between items-center'>
        <div>
            <Link to={'/'}><img src={Logo} alt="logo" /></Link>
        </div>

        <div>
            <ul className='flex gap-10 '>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
            </ul>
        </div>

        <div className='flex gap-10 mt-3'>
            { !login &&
                <Link to={'/Login'}><button className='bg-[#005eff]  px-3 py-2 border border-none rounded'>Login</button></Link>
            }
            { !login &&
                <Link to={'/Signup'}><button className='bg-[#005eff]  px-3 py-2 border border-none rounded'>Sign up</button></Link>
            }
            { login &&
                <Link onClick={()=>{
                    setLogin(false)
                    toast.success("Logged out")
                }} to={'/'}><button className='bg-[#005eff]  px-3 py-2 border border-none rounded'>Logout</button></Link>
            }
            { login &&
                <Link to={'/Dashboard'}><button className='bg-[#005eff]  px-3 py-2 border border-none rounded'>Dashboard</button></Link>
            }
        </div>
=======

export default function Navbar() {
  return (
    <div>
      <nav className='bg-bgDark py-4'>
         <h1 className='text-3xl font-bold text-center text-white'>Top Courses</h1>
      </nav>
>>>>>>> 7bfdec8 (first commit)
    </div>
  )
}
