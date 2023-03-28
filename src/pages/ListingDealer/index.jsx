import React from 'react'
import Listing from "../../assets/listingImg.png"
import videoImg from "../../assets/videoListing.png"

export default function ListingDealers() {
  return (
      <div className='w-full'>
        <div className="w-full">
            <img src={Listing} />
         </div>

         <div className='w-full flex flex-col items-center py-24 space-y-20'>
             <h5 className='text-3xl font-semibold'>Watch video below to see how to list</h5>

             <div className=''>
                <img className='' src={videoImg} />

                {/* <video></video> */}
             </div>

             <div className='w-full flex flex-col items-center py-20 space-y-8'>
                <h5 className='text-4xl font-semibold'>Fill out the details below to get started</h5>
                

                <div className='flex flex-col w-2/5 space-y-6'>
                    <input  placeholder='Technical officer full name' className='w-full py-2 border px-2 rounded-md' />
                    <input  placeholder='Email' className='w-full py-2 border px-2 rounded-md' />
                    <input  placeholder='Site name' className='w-full py-2 border px-2 rounded-md' />
                    <input  placeholder='Site URL' className='w-full py-2 border px-2 rounded-md' />
                    <input  placeholder='Data feed URL' className='w-full py-2 border px-2 rounded-md' />
                    <select className='w-full py-3 border px-2 rounded-md text-slate-400'>
                        <option>Site ecommerce hosting platform</option>
                    </select>
                    <select className='w-full py-3 border px-2 rounded-md text-slate-400'>
                        <option>Site ecommerce hosting platform</option>
                    </select>

                    <textarea 
                       placeholder='Enter your site description'
                       className='border px-2 py-2 rounded-md'
                    />
                    <button className='bg-blue-900 py-3 text-white rounded-md'>Save your details</button>



                </div>
             </div>

         </div>


      </div>
  )
}
