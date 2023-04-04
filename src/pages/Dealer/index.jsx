import React from 'react'
import pic1 from "../../assets/pic4.png"
import pic4 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
import mobile  from "../../assets/mobile.png"
import ammoImg from "../../assets/ammoHero.png"
import Ammo from './Ammo'


const TopPart=()=>{
  return(
     <div className='flex  px-20 top-h w-full items-center justify-between space-x-8'>
          <main className='h-full w-full w-3/5'>
            <img src={pic1} className="h-full w-full"/>

         </main>
         <main className='h-full w-full flex flex-col items-center space-y-10 w-2/5'>
            <img src={pic4} className="w-full h-52"/>
            <img src={pic3} className="w-full h-52"/>
            <img src={pic2} className="w-full h-52"/>

         </main>

     </div>
  )
}


const Banner=({setTitle})=>{
  return(
    <div className='h-28 flex items-center lg:px-20 px-10'  style={{background:"#F62121"}} >

      <main className='flex items-center text-white space-x-10 overflow-x-scroll py-4 lg:py-0'>
        
          <select style={{background:"#F62121"}}  className="text-sm">
          <option>ALL DEALERS</option>
          </select>
         
          <select style={{background:"#F62121"}} className="text-sm" >
          <option>A(20)</option>
          </select>
          <select style={{background:"#F62121"}} className="text-sm">
          <option>B(20)</option>
          </select>   
          <select style={{background:"#F62121"}} className="text-sm">
          <option>C(20)</option>
          </select> 
          <select style={{background:"#F62121"}} className="text-sm">
          <option>D(20)</option>
          </select>
          <select style={{background:"#F62121"}} className="text-sm">
          <option>E(20)</option>
          </select>
          <select style={{background:"#F62121"}} className="text-sm">
          <option>F(20)</option>
          </select>
          <select style={{background:"#F62121"}} className="text-sm">
          <option>G(20)</option>
          </select>
      </main>
      <main></main>

    </div>
  )
}

export default function Dealer() {
 

  return (
    <div className='w-full '>
        {/* <TopPart /> */}
        <div className='w-full'>
            <img src={ammoImg} className="sm:block hidden w-full"/>
            <img src={mobile} className="sm:hidden block w-full"/>

        </div>
        <div className='py-1'>
         <Banner />
        </div>
       <Ammo />


    </div>
  )
}
