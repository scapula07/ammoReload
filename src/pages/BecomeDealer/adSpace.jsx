import React from 'react'
import ads from "../../assets/adsPic.png"

export default function AdSpace() {
  return (
    <div className='w-full  px-20'>
        <div className='w-full'>
           <h5 className='text-3xl font-bold'> Check out our Ads space reservations</h5>
           <p className='w-3/4 py-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </div>

        <div className='flex '>
            <main className='w-1/2'>

            </main>
             <main className='grid grid-flow-row lg:grid-cols-2 grid-cols-2 gap-4 py-10 w-1/2'>
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
           <h5 className='text-3xl font-bold'> Check out our Ads space reservations</h5>
           <p className='w-3/4 py-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </div>

        <div className='flex'>
                <main className='grid grid-flow-row lg:grid-cols-2 grid-cols-2 gap-4 py-10 w-1/2'>
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

                    <main className='w-1/2'>

                     </main>

        </div>
    </div>
  )
}
