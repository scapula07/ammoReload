import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo-ammo.png"
import profile from "../../assets/profile.png"

export default function Header() {
  return (
    <div className='w-full white'>
    <div className='flex items-center w-full justify-between'>
          <main className='flex items-center space-x-1' >
               <div className='flex items-center '>
                   <img src={logo} className="w-5 h-8 "/>
                 

               </div>
               <h5 className='text-lg font-bold ' style={{color:"#333333"}}>ReloadAmmo</h5>
          </main>
          <main className='hidden  lg:flex text-color-sm text-lg font-normal items-center space-x-8'>
            <div className='flex items-center space-x-8'>
                    <Link to="/"><h5 className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Dealers</h5></Link> 
                    <Link to="#"> <h5  className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Become a dealer</h5></Link>
                    <Link to="/"> <h5 className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Ammo</h5></Link>
                    <Link to="/"><h5 className='text-base font-semibold' style={{color:"#4F4F4F"}}>Rating</h5></Link>  
                    <select className='outline-none border-0'>
                        <option value={"Support"}>
                        Support
                        </option>

                    </select>
             </div>

                <div>
                     <img src={profile}  className="w-10 h-10"/>
                    
                </div>

          </main>
    
             
      
          


    </div>
</div>
  )
}
