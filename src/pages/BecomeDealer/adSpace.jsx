import React from 'react'
import ads from "../../assets/adsPic.png"

export default function AdSpace() {
  return (
    <div className='w-full  lg:px-20 px-6'>
        <div className='w-full flex flex-col items-center lg:block'>
           <h5 className='lg:text-3xl text-2xl font-bold'> Check out our Ads space reservations</h5>
           <p className='lg:w-3/5 py-10 w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </div>

        <div className='flex lg:flex-row flex-col lg:space-x-8'>
            <main className='lg:w-1/2'>
                  <div className='relative w-full' >
                     <img src={ads} className="w-full " />

                     <main className='flex w-full justify-end -mt-14'> 
                        <img src={ads} className="w-3/4" />

                     </main>
                   </div>
            </main>
             <main className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-4 py-10 lg:w-1/2  px-8 lg:px-0'>
                {[1,2,3,4,5,6,7,8].map(()=>{
                    
                    return(
                        <div className='bg-white flex flex-col shadow-lg items-center py-4 rounded-md space-y-4'>
                             <h5 className='text-base font-semibold'>Top hero section</h5>
                             <h5 className='flex items-center space-x-2 '>
                                <span className='text-lg font-bold'>$100</span>
                                <span className='text-xs'>Monthly</span>

                             </h5>
                             <button className='bg-blue-900 text-white text-xs px-8 py-3 rounded-md '>Available for Ads</button>

                        </div>
                    )


                })

                }
             </main>

        </div>




        <div className='w-full py-20'>
           <h5 className='lg:text-3xl text-2xl font-bold'> Check out our Ads space reservations</h5>
           <p className='lg:w-3/5 py-10 w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </div>

        <div className='flex lg:flex-row flex-col lg:space-x-8 space-y-16' >
                <main className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 px-8 lg:px-0 gap-4 lg:py-10 lg:w-1/2'>
                        {[1,2,3,4,5,6,7,8].map(()=>{
                            
                            return(
                                <div className='bg-white flex flex-col shadow-lg items-center py-4 rounded-md space-y-2'>
                                    <h5 className='text-base font-semibold'>Top hero section</h5>
                                    <h5 className='flex items-center space-x-2 '>
                                        <span className='text-lg font-bold'>$100</span>
                                        <span className='text-xs'>Monthly</span>

                                    </h5>

                                    <button className='bg-blue-900 text-white text-xs px-8 py-3 rounded-md '>Available for Ads</button>

                                </div>
                            )


                        })

                        }
                    </main>

                 <main className='lg:w-1/2'>
                      <div className='relative w-full' >
                        <img src={ads} className="w-full " />

                        <main className='flex w-full justify-end -mt-14'> 
                            <img src={ads} className="w-3/4" />

                        </main>
                      </div>
                </main>

        </div>
    </div>
  )
}
