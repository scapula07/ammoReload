import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo-ammo.png"
import profile from "../../assets/profile.png"

export default function Footer() {
  return (
     <div className='w-full h-full flex items-center ' >
           <div className='flex items-center w-full justify-between'>
          <main className='flex items-center space-x-1' >
               <div className='flex items-center '>
                   <img src={logo} className="w-5 h-8 "/>
                 

               </div>
               <h5 className='text-lg font-bold text-white ' >ReloadAmmo</h5>
          </main>
          <main className='hidden  lg:flex text-color-sm text-lg font-normal items-center '>
            <div className='flex items-center space-x-8 text-white'>
                    <Link to="/"><h5 className='text-base font-semibold'  >Dealers</h5></Link> 
                    <Link to="#"> <h5  className='text-base font-semibold'  >Become a dealer</h5></Link>
                    <Link to="/"> <h5 className='text-base font-semibold' >Ammo</h5></Link>
                    <Link to="/"><h5 className='text-base font-semibold'>Rating</h5></Link>  
                    <select className='outline-none border-0 ' style={{background:"#F62121"}}>
                        <option value={"Support"}>
                        Support
                        </option>

                    </select>
             </div>

               

          </main>
    
             
      
          


    </div>
      
    </div>
  )
}
