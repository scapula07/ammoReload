import React from 'react'
import {BsSearch} from "react-icons/bs"
 import Filter from './filter'
 import result from "../../assets/resultImg.png"
 import flag from "../../assets/flag.png"
 import {FaShareAlt} from "react-icons/fa"
 import {AiFillStar} from "react-icons/ai"


const Top=()=>{
  return(
    <div className='w-full flex items-center'>
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


const Result=()=>{
  

  return(
      <div className='w-full border-b py-8'>
         <div className='flex flex-col w-full '>
                <div className='w-full flex justify-end'>
                    <button className='text-white px-4  py-1 text-xs' style={{background:" rgba(246, 33, 33, 1)",borderRadius: "0px 8px 8px 0px"}}>New Deal</button>
                  
                  </div>

                  <div className='flex space-x-4'>
                     <img src={result} className="rounded-full w-20 h-20"/>

                     <main className='flex w-full justify-between'>
                           
                     <main className='flex flex-col space-y-4'>
                          <h5 className='text-lg font-semibold'>Target Sport Factory USA</h5>
                            <p className='text-sm font-light w-3/4'> Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor.</p>
                           <div className='flex items-center space-x-2'> 
                             <h5 className='flex items-center space-x-1'>
                              <AiFillStar className='text-yellow-400 text-xs'/>
                              <span className='text-xs font-light'>5.0</span>

                                </h5>

                                <div className='flex items-center space-x-2'>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>100 Reviews</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Ammo</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Shipping</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Hand guns</h5>
                                </div>
                             </div> 

                             

                      </main>


                         <main className='flex items-center space-x-6'>
                              <FaShareAlt />
                              <img src={flag}/>

                         </main>

                     </main>



                  </div>








         </div>
       </div>
  )
}



export default function Ammo() {
  return (
    <div className='w-full px-20 py-8'> 
        <Top />
       
        <div className='flex py-8 space-x-10 w-full space-x-20' >
             <main className=' w-3/12'>
                <Filter />


             </main>
             <main className='w-fullflex flex-col space-y-4 items-center space-y-8 overflow-y-scroll' style={{height:"200vh"}} >
              {[1,2,3,4,5,6,7,8,1,1,1,1,1].map(()=>{
                 return(
                   <Result />
                 )
              })

              }

             </main>
            

        </div>

    </div>
  )
}
