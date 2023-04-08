import React from 'react'
import { useLocation } from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import {AiFillStar} from "react-icons/ai"
import Filter from './filter'
import {FaShareAlt} from "react-icons/fa"
import flag from "../../assets/flag.png"


const AmmoCard=({ ammo})=>{
   
    const img =ammo["img-src"]

    return(
   <div className='flex flex-col w-full space-y-8 shadow-xl '>
               <div className='w-full flex justify-end'>
                    <button className='text-white px-4  py-1 text-xs' style={{background:" rgba(246, 33, 33, 1)",borderRadius: "0px 8px 8px 0px"}}>New Deal</button>
                    
                 </div>
            <div className='flex lg:flex-row flex-col w-full bg-white  lg:space-x-4 ' >

                <main className='lg:w-1/4 w-full'>
                    <img src={img} className="h-full"/>
                    
                </main>
                <main className='lg:w-3/4 w-full'> 
                   

                    <div className='flex flex-col w-full lg:py-4 lg:space-y-3 space-y-10'>

                            <main className='flex w-full items-center '>
                            <div className='flex w-full items-center space-x-4'>
                                <h5>{ammo?.name}</h5>

                                <h5 className='flex items-center space-x-4 lg:block hidden'>
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
                            <p className='text-xs font-light'>{ammo?.description} </p>

                            <div className='grid grid-flow-row lg:grid-cols-3 grid-cols-2 gap-4 py-10'>
                                <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md' style={{background:"rgba(239, 239, 239, 1)"}}>Brand: {ammo?.manufacturer}</h5>
                                <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md' style={{background:"rgba(239, 239, 239, 1)"}}>Barrel length: {ammo?.barrelLength}</h5>
                                <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md' style={{background:"rgba(239, 239, 239, 1)"}}>Action Type: {ammo?.actionType}</h5>
                                <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md' style={{background:"rgba(239, 239, 239, 1)"}}>Weight: {ammo?.weight}</h5>
                            </div>
                            <div className='border-t flex item-center w-full justify-between py-4 px-2'>
                                <h5 className='text-slate-400 font-light text-sm '>Updated some minutes ago</h5>
                                <h5  className=' font-semibold text-sm '>{ammo?.price}</h5>

                            </div>


                    </div>

                </main>

            </div>
  </div>
    )
  }


export default function HandGuns() {
   const [result,isLoading,ammoCollection,bulletCollection,rifleCollection,handgunCollection]= useOutletContext();
  return (
    <div className='flex flex-col w-full space-y-10 lg:overflow-y-scroll div-vh'>
    {isLoading?
       <div className='w-full flex items-center justify-center'>
           <ScaleLoader  color="#F62121" loading={isLoading} />

       </div>
     :
     <>
    {result.length ===0?
       <>
         {handgunCollection?.map((ammo)=>{
            return(
              <a href={ammo["product-href"]}>
               <AmmoCard  ammo={ammo}/>
               </a>

             )
           })

         }
       
       </>

       :

       <>
          {
             result?.map((ammo)=>{
                 return(
                  <a href={ammo?.item["product-href"]}>
                   <AmmoCard  ammo={ammo?.item}/>
                   </a>
              )

             })


          }

       </>

    }
    </>

    }

  </div>

  )
}
