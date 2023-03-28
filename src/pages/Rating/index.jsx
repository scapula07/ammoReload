import React from 'react'
import result from "../../assets/Ellipse.png"
import {AiFillStar,AiFillLike,AiFillDislike} from "react-icons/ai"


const RatingBoard=()=>{
    return(
    <div className='w-full flex flex-col space-y-4'>
        <main className='flex w-full justify-end'>
            <button className='py-4 px-10 rounded-md bg-blue-900 text-white text-sm'>Review/Rate Dealer</button>
        </main>
          
          <main className='flex flex-col'>
            <h5 className='text-base font-normal'>Summary</h5>

            <div className='flex w-full items-center space-x-4'>
               <main className='w-4/5 flex flex-col '>
                 <section className='flex items-center w-full space-x-1'>
                    <h5 className='font-light text-sm text-slate-500'>5</h5>
                    <h5 className='w-full bg-slate-300 h-2 rounded-md flex items-center'>
                      <span className='w-full h-full bg-yellow-500 rounded-md'></span>
                    </h5>
                 </section>

                 <section className='flex items-center w-full space-x-1'>
                    <h5 className='font-light text-sm text-slate-500'>4</h5>
                    <h5 className='w-full bg-slate-300 h-2 rounded-md flex items-center'>
                    <span className='w-10/12 h-full bg-yellow-500 rounded-md'></span>
                    </h5>
                 </section>

                 <section className='flex items-center w-full space-x-1'>
                    <h5 className='font-light text-sm text-slate-500'>3</h5>
                    <h5 className='w-full bg-slate-300 h-2 rounded-md flex items-center'>
                    <span className='w-3/5 h-full bg-yellow-500 rounded-md'></span>
                    </h5>
                 </section>

                 <section className='flex items-center w-full space-x-1'>
                    <h5 className='font-light text-sm text-slate-500'>2</h5>
                    <h5 className='w-full bg-slate-300 h-2 rounded-md flex items-center'>
                    <span className='w-2/5 h-full bg-yellow-500 rounded-md'></span>
                    </h5>
                 </section>

                 <section className='flex items-center w-full space-x-1'>
                    <h5 className='font-light text-sm text-slate-500'>1</h5>
                     <h5 className='w-full bg-slate-300 h-2 rounded-md flex items-center'>
                      <span className='w-1/5 h-full bg-yellow-500 rounded-md'></span>
                    </h5>
                 </section>

               </main>
               <main className='flex flex-col space-y-1'>
                  <h5 className='flex flex-col'>
                        <h6 className='flex items-center'>
                           <span className='text-sm font-semibold'>4.5 </span>
                           <AiFillStar className='text-xs text-yellow-400'/>
                        </h6>
                        <span className='text-xs text-slate-300'>273 Reviews</span>
                        
                  </h5>
                  <h5 className='flex flex-col'>
                        <h6>
                           <span className='text-sm font-semibold'>88%</span>
                          
                        </h6>
                        <span className='text-xs text-slate-300'>273 Reviews</span>
                        
                  </h5>

               </main>
            </div>

          </main>
    </div>
    )
}

const ReviewCard=()=>{
    return(
        <div className='w-full'>
            <div className='w-5/6 flex items-center justify-between '>
                <h5 className='text-xl font-semibold' style={{color: "#3F3F46"}}> Easy, Fast, maximum satisfaction </h5>
                <main className='flex '>
                    {[1,2,3,4].map(()=>
                            <AiFillStar  className="text-xl text-yellow-400"/>
                    )}
                  
                </main>

            </div>
            <p className='text-sm font-light w-5/6 py-4' >Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctorLorem ipsum dolor sit amet consectetur. Morbi . dolor sit amet consectetur. Morbi </p>
             
            <div className='w-5/6 flex items-center space-x-4'>
                <main className='flex items-center space-x-4'>
                    <h5 className='text-sm '>@JUDE Gray</h5>
                    <h5 className='text-sm font-light'>Joined : Nov 12, 2023</h5>
                    <h5 className='text-sm font-light'>Posted : Nov 12, 2023/ 10:00am</h5>

                </main>
                <main className='flex items-center space-x-2'>
                     <AiFillLike />
                    <AiFillDislike />
                 

                </main>

            </div>
        </div>
    )
}
export default function Ratings() {
  return (
    <div className='px-20'>
        <h5 className='text-3xl font-semibold'>Ammo dealers (1000)</h5>

        <div className='flex py-4 w-full justify-between'>
            <main className='w-4/12'>
              <select className='border text-sm font-semibold  w-full py-2 px-6 rounded-md'>
                 <option>Dealers (1000)</option>
              </select>

              <div className='flex flex-col space-y-8 overflow-y-scroll py-8 ' style={{height:"100vh"}}>
                {[1,2,3,4,4,4,5].map(()=>{
                     return(
                        <div className='flex items-center space-x-4 hover:bg-blue-900 hover:text-white py-3 px-2'>
                            <img src={result} className="w-20 h-20"/>
                            <main className='flex flex-col space-y-2'>
                                <h5 className=' font-semibold'>Target Sport Factory USA</h5>
                                <p className='text-xs font-light'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. </p>
                                  
                                <div className='flex items-center space-x-2 '>
                                    <h5 className='flex items-center'>
                                      <AiFillStar className='text-yellow-400' />
                                      <span className='text-xs'>5.0</span>
                                    </h5>
                                    <h5 className='bg-slate-200 text-xs px-2 py-0.5 font-light rounded-md' style={{color:"black"}}>100 Reviews</h5>
                                    <h5 className='bg-slate-200 text-xs px-2 py-0.5 font-light rounded-md' style={{color:"black"}}>100+ products</h5>

                                </div>
                            </main>


                        </div>
                     )
                })}

            </div>
            </main>

           
             <main className='w-3/5'>
                 <RatingBoard />
                
                <div className='flex flex-col py-20 space-y-14 overflow-y-scroll' style={{height:"100vh"}}>
                    {[1,2,3,4,4,6,7,8].map(()=>{
                        return(
                           <ReviewCard />
                        )
                    })

                    }

                </div>


            </main>

        </div>


    </div>
  )
}
