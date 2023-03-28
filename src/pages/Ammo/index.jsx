import React from 'react'
import ammo from "../../assets/ammoHero.png"
import {BsSearch} from "react-icons/bs"
import Filter from './filter'
import ammoItem  from "../../assets/ammoItem.png"
import {AiFillStar} from "react-icons/ai"
import {FaShareAlt} from "react-icons/fa"
import flag from "../../assets/flag.png"

const Banner=()=>{
    return(
      <div className='h-28 flex items-center px-20 '  style={{background:"#F62121"}} >
  
        <main className='flex items-center text-white space-x-10'>
          
            <select style={{background:"#F62121"}} >
            <option>All AMMO</option>
          </select>
           
            <h5>HANDGUN</h5>
            <h5>RIFLE</h5>
            <h5>RIMFIRE</h5>
            <h5>SHOTGUN</h5>
            <h5>RIMFIRE</h5>
            <h5>GUNS</h5>
            <h5>MAGAZINES</h5>
            <h5>BULLETS</h5>
        </main>
        <main></main>
  
      </div>
    )
  }





  const Top=()=>{
    return(
      <div className='w-full flex items-center px-20'>
          <main className='flex items-center w-3/5 space-x-12'>
              <div className='flex border items-center w-1/2  px-4 py-2 rounded-md space-x-4' style={{border: "1px solid #D4D4D8"}}>
                <BsSearch className='text-slate-500' />
                <input placeholder='Start searching...'/>
  
              </div>
  
              <div className='flex'>
                  <h5 style={{color:"#71717A"}}>Sort by:</h5>
                  <select className='outline-none' style={{color:"#71717A"}}>
                     <option>Latest</option>
                  </select>
  
              </div>
  
  
          </main>
           <main className='w-2/5 flex justify-end' >
              <h5 className='text-3xl font-semibold ' >Total: 1000 Ammos</h5>
  
          </main>
      </div>
    )
  }
  

export default function Ammo() {
  return (
    <div className='w-full'>
        <div className=''>
            <img src={ammo}/>

        </div>
        <div className='py-10'>
           <Banner />
        </div>

        <Top/>

        <div className='flex py-20 w-full items-center justify-between' > 
          <main className='px-20  w-4/12'>
            <Filter />
          </main>

          <main className='w-3/5 px-20' > 
             <div className='flex flex-col w-full space-y-10'>
                 {[1,2,3,4,5,5,6].map(()=>{
                     return(
                        <div className='flex w-full bg-white shadow-lg space-x-4 '>

                            <main className='w-1/4'>
                                <img src={ammoItem} className="h-full"/>
                                
                            </main>
                            <main className='w-3/4'> 
                              <div className='w-full flex justify-end'>
                                <button className='text-white px-4  py-1 text-xs' style={{background:" rgba(246, 33, 33, 1)",borderRadius: "0px 8px 8px 0px"}}>New Deal</button>
                                 
                              </div>

                                 <div className='flex flex-col w-full py-4 space-y-3'>

                                      <main className='flex w-full items-center '>
                                         <div className='flex w-full items-center space-x-4'>
                                            <h5>223 Remington Ammo</h5>

                                            <h5 className='flex items-center space-x-4'>
                                                <span className='text-slate-500'>
                                                   Gunprime 
                                                </span>

                                                <span className='flex items-center space-x-1'>
                                                    <AiFillStar  className='text-yellow-400'/>
                                                   <span className=''> 5.0 </span>
                                                </span>
                                              

                                            </h5>
                                          
                                          </div>
                                          <h5 className='flex items-center px-4 space-x-4'>
                                                <FaShareAlt className='text-2xl'/> 
                                                <img src={flag}/>

                                         </h5>
                                           

                                        
                                      </main>
                                       <p className='text-xs font-light'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. </p>

                                       <div className='flex flex-col'>

                                       </div>
                                        <div className='border-t flex item-center w-full justify-between py-4 px-2'>
                                            <h5 className='text-slate-400 font-light text-sm '>Updated 3mins ago</h5>
                                            <h5  className=' font-semibold text-sm '>$350.00</h5>

                                        </div>


                                 </div>

                            </main>

                        </div>
                     )
                 })

                 }
             </div>

          </main>

        </div>
       


        
    </div>
  )
}
