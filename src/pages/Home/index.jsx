import React,{useState} from 'react'
import pic1 from "../../assets/pic4.png"
import pic4 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
import reloading from "../../assets/reloading.png"
import gun from "../../assets/gun.png"
import rifle from "../../assets/rifle.png"
import ammo from "../../assets/ammo.png"
import  bullet from "../../assets/bullet.png"
import dealerPic from "../../assets/dealer.png"
import {AiFillStar} from "react-icons/ai"
import "./home.css"
import Modal from '../../components/Modal'
import {AiOutlineClose} from "react-icons/ai"


const TopPart=()=>{
    return(
       <div className='flex lg:flex-row flex-col lg:px-20 px-6 space-y-6 top-h w-full lg:items-center lg:justify-between lg:space-x-8'>
            <main className='lg:h-full w-full lg:w-3/5'>
              <img src={pic1} className="lg:h-full w-full"/>
  
           </main>
           <main className='lg:h-full w-full flex flex-col items-center space-y-4 w-2/5'>
              <img src={pic4} className="w-full lg:h-52 "/>
              <img src={pic3} className="w-full lg:h-52"/>
              <img src={pic2} className="w-full lg:h-52"/>
  
           </main>
  
       </div>
    )
  }


  const Searches=()=>{

    return(
        <div className='lg:px-20 px-6 w-full'>
            <main className='flex flex-col w-full space-y-14' > 
                    <div className='flex items-center justify-center w-full lg:justify-between'>
                        <h5 className='lg:text-4xl text-2xl font-bold text-center ' style={{color: "#4F4F4F"}}>What are you searching for</h5>
                        <h5 className='lg:flex hidden' style={{color: "#13505B"}}>See more {">>"}</h5>
                    </div>

                    <div className='flex lg:flex-row flex-col space-y-4 items-center w-full justify-center  lg:space-x-10'>
                        <img src={reloading} className="h-24" />
                        <img src={ammo} className="h-24"/>
                        <img src={gun} className="h-24"/>
                        <img src={rifle} className="h-24"/>

                        <div className='flex w-full justify-center lg:hidden pt-8'>
                            <h5 className='text-sm ' style={{color: "#13505B"}}>See more {">>"}</h5>
                         </div>

                    </div>
        

            </main>

            <main className='flex flex-col w-full space-y-14 py-24'> 
                   <div className='flex items-center justify-center w-full lg:justify-between'>
                        <h5 className='lg:text-4xl text-2xl font-bold text-center ' style={{color: "#4F4F4F"}}>What people often search</h5>
                        <h5 className='lg:flex hidden'  style={{color: "#13505B"}}>See more {">>"}</h5>
                    </div>

                    <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-4 py-10 px-8 lg:px-0'>
                        {[1,2,3,4,5,6,7,8].map(()=>{
                            return(
                                <div className='lg:h-24 h-16 flex justify-center items-center' style={{background:" rgba(251, 248, 248, 1)"}}>
                                     <h5 className='lg:text-3xl font-bold text-xl'>9MM Ammo</h5>
                                </div>
                            )
                        })

                        }

                   <div className='flex w-full justify-center lg:hidden pt-8 '>
                       <h5 className='text-sm ' style={{color: "#13505B"}}>See more {">>"}</h5>
                    </div>


                    </div>
                   
            </main>

        </div>
    )
  }

  const AmmoDeals=()=>{
     return(
         <div className='lg:px-20 w-full'>
                <div className='flex items-center justify-center w-full lg:justify-between'>
                                <h5 className='lg:text-4xl text-2xl font-bold text-center ' style={{color: "#4F4F4F"}}>Hot ammo deals onsite</h5>
                                <h5 className='lg:flex hidden' style={{color: "#13505B"}}>See more {">>"}</h5>
                </div>

                <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-4 gap-y-8 lg:gap-y-0 py-10 px-8'>
                        {[1,2,3,4,5,6,7,8].map(()=>{
                            return(
                                <main className='h-72 justify-center items-center bg-white rounded-md' >
                                     <div className='h-52 py-10 px-2 flex justify-center' style={{background:" rgba(251, 248, 248, 1)"}}>
                                         <img src={bullet} className="h-20"/>
                                     
                                     </div>
                                     <div className='flex flex-col  px-2 space-y-4'>
                                        <h5 className='flex flex-col'>
                                            <span className='text-base font-semibold'>223 Remington Ammo</span>
                                            <span className='text-sm font-semibold' style={{color:"#979797"}}>Gunprime</span>
                                        </h5>
                                        <h5  className='text-sm font-semibold'>$350.00</h5>

                                     </div>
                                </main>
                               
                            )
                        })

                        }

                    <div className='flex w-full justify-center lg:hidden pt-8 '>
                       <h5 className='text-sm ' style={{color: "#13505B"}}>See more {">>"}</h5>
                    </div>

                    </div>

         </div>
     )
  }


const TopDealers=()=>{

    return(
        <div className='px-20 w-full py-20'>
           <div className='flex items-center justify-center w-full lg:justify-between' >
                <h5 className='lg:text-4xl text-2xl font-bold text-center ' style={{color: "#4F4F4F"}}>Top dealers</h5>
                <h5 className='lg:flex hidden'  style={{color: "#13505B"}}>See more {">>"}</h5>
           </div>

           <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-y-8 lg:gap-y- gap-4 py-10'>
                        {[1,2,3,4,5,6,7,8].map(()=>{
                            return(
                                <main className='h-72 flex flex-col  items-center  py-12 rounded-md' style={{background:" rgba(251, 248, 248, 1)"}} >
                                     <img src={dealerPic} className="rounded-full h-36 w-36"/>
                                      <div className='flex-col flex items-center py-2 '>
                                         <h5 className='text-sm font-semibold'>GunPrime</h5>
                                         <h5 className='flex items-center space-x-0.5 '>
                                            <AiFillStar className='text-yellow-400 text-xs'/>
                                            <span className='text-sm font-light'>5.0</span>
                                         </h5>
                                         <h5 className='text-sm font-light'>100+ Ammos</h5>
                                     </div>
                                </main>
                               
                            )
                        })

                        }

                    </div>
      
        </div>
    )

}

export default function Home() {

   const [trigger,setTrigger]=useState(true)

   

  return (

      <>
       <div className='w-full py-8 lg:py-0'>
          <TopPart />
          <div className='lg:py-20 pt-10 pb-20 flex justify-center'>
            <button className='text-white lg:w-72 w-64 py-4 lg:text-base text-sm font-light rounded-md' style={{background:"#0F255C"}}>Start searching</button>
        </div>

            <Searches />
            <AmmoDeals />
            <TopDealers />

    </div>
     
      <Modal trigger={trigger} cname=" lg:w-1/2 w-11/12 rounded-sm py-10 lg:px-20 px-6" >
            <main className='flex justify-end w-full'>
            
                <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
            </main>

            <div className='w-full flex flex-col items-center justify-center'>
                <main >
                <h5 className='font-semibold lg:text-3xl text-xl'>Verify Your Age</h5>
                <p className='lg:text-sm text-xs font-light py-4 lg:w-3/4 w-full'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. Turpis potenti mauris lectus viverra euismod non velit et. Eu dictum .</p>
                </main> 

                 <div className='flex flex-col w-full space-y-4'>
                    <main className='flex flex-col w-full space-y-2'>
                       <label className='text-sm lg:text-normal'>Birth Year</label>
                       <select className='w-full py-3 border px-2 rounded-md text-slate-400'>
                          <option>2000</option>
                         </select>

                    </main>
                    <main className='flex flex-col w-full space-y-2'>
                       <label  className='text-sm lg:text-normal'>Birth Month</label>
                       <select className='w-full py-3 border px-2 rounded-md text-slate-400'>
                          <option>2000</option>
                         </select>

                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label  className='text-sm lg:text-normal'>Birth Day</label>
                        <input  placeholder='12' className='w-full py-2 border px-2 rounded-md' />

                    </main>

                    <main className='w-full  '>
                         <button className='w-full bg-blue-900  text-white py-4 rounded-md lg:text-normal text-sm '>Continue</button>
                    </main>

                 </div>
            </div>

     </Modal>


      {/* <Modal trigger={signUptrigger} cname=" w-1/2 rounded-sm py-10 px-20">

     </Modal> */}

     </>
  )
}
