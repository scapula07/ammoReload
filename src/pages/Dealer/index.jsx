import React from 'react'
import pic1 from "../../assets/pic4.png"
import pic4 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
// import "./home.css"
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


const Banner=()=>{
  return(
    <div className='h-28 flex items-center px-20'  style={{background:"#F62121"}} >

      <main className='flex items-center text-white space-x-10'>
          <h5>DEALERS</h5>
          <h5>AMMO</h5>
          <h5>GUNS</h5>
          <h5>MAGS</h5>
          <h5>RELOADING</h5>
          <h5>RIFLE</h5>
          <h5>RIMFIRE</h5>
          <h5>SHORTGUN</h5>
      </main>
      <main></main>

    </div>
  )
}

export default function Dealer() {


  return (
    <div className='w-full '>
        <TopPart />
        <div className='py-1'>
         <Banner />
        </div>
       <Ammo />


    </div>
  )
}
