import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo-ammo.png"
import profile from "../../assets/profile.png"
import { AccountState } from "../../Recoil/globalState"
import { useRecoilValue} from 'recoil';
import {AiOutlineClose} from "react-icons/ai"
import {BiMenu} from "react-icons/bi"


export default function Header({setTrigger}) {
  const currentUser =useRecoilValue(AccountState)
  const [nav,setNav]= useState("")
  console.log(currentUser?.email?.length,"header")
  const [trigger,setMenuTrigger]=useState(false)

  return (
    <div className='w-full white relative'>
    <div className='flex items-center w-full justify-between'>
          <main className='flex items-center space-x-1' >
               <div className='flex items-center '>
                   <img src={logo} className="w-5 h-8 "/>
                 

               </div>
               <Link to="/"> <h5 className='text-lg font-bold ' style={{color:"#333333"}}>ReloadAmmo</h5></Link>
          </main>

          <main className='sm:hidden '>
             <BiMenu className='text-3xl' onClick={()=>setMenuTrigger(true)}/>
          </main>
          <main className='hidden  lg:flex text-color-sm text-lg font-normal items-center space-x-8'>
            <div className='flex items-center space-x-8'>
                    <Link to="/dealers"><h5 className='text-base font-semibold hover:border-b-2 border-blue-900 '  style={{color:"#4F4F4F"}}>Dealers</h5></Link> 
                    <Link to="/become-dealer"> <h5  className='text-base font-semibold hover:border-b-2 border-blue-900'  style={{color:"#4F4F4F"}}>Become a dealer</h5></Link>
                    <Link to="/ammos"> <h5 className='text-base font-semibold hover:border-b-2 border-blue-900'  style={{color:"#4F4F4F"}}>Ammo</h5></Link>
                    <Link to="/ratings"><h5 className='text-base font-semibold hover:border-b-2 border-blue-900' style={{color:"#4F4F4F"}}>Rating</h5></Link>  
                    <select className='outline-none border-0'>
                        <option value={"Support"}>
                        Support
                        </option>

                    </select>
             </div>
               { currentUser?.email===undefined && 
                <div onClick={()=>setTrigger(true)}>
                     <img src={profile}  className="w-10 h-10"/>
                    
                </div>
              }

         {currentUser?.email !=undefined && 
             <>
             {currentUser?.profile? 
                <div onClick={()=>setTrigger(true)}>
                     <img src={profile}  className="w-10 h-10"/>
                    
                </div>

                :
                <div className='rounded-full w-12 h-12 text-white text-xl items-center justify-center flex' style={{background:"#F62121"}} >
                       {currentUser?.email?.slice(0,1)} 
                </div>
              }
              </>
              }


          </main>
    
             
      
          {trigger&&

           <div className=' sm:hidden  fixed top-0 right-0 w-1/2 bg-white z-10 h-1/2 py-6 px-6' >
              <main className='w-full flex justify-end'>
                 <AiOutlineClose className='text-xl' onClick={()=>setMenuTrigger(false)}/>
              </main>
            <div className='flex flex-col  space-y-6'>
                    <Link to="/dealers"><h5 className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Dealers</h5></Link> 
                    <Link to="/become-dealer"> <h5  className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Become a dealer</h5></Link>
                    <Link to="/ammos"> <h5 className='text-base font-semibold'  style={{color:"#4F4F4F"}}>Ammo</h5></Link>
                    <Link to="/ratings"><h5 className='text-base font-semibold' style={{color:"#4F4F4F"}}>Rating</h5></Link>  
                    <select className='outline-none border-0'>
                        <option value={"Support"}>
                        Support
                        </option>

                    </select>

            </div>
          </div> 
}
    </div>
</div>
  )
}
