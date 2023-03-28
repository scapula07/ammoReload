import React from 'react'
import filter from "../../assets/filter.png"

export default function Filter() {
  return (
    <div className='w-full'>  
        <div className='flex items-center border w-36 justify-center space-x-4 py-2 rounded-md'>
            <img src={filter} />
            <h5 className='text-base font-semibold  '>Filter</h5>

        </div>

        <div className='w-full flex flex-col space-y-4 py-10'>
            <h5 className='text-base font-semibold '>Dealers (120 onboard)</h5>
            <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                <option>
                 2A Warehouse
                </option>
            </select>

         </div>
           

        <div className='w-full flex flex-col '>
               <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Price  Range</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                         Popular
                        </option>
                    </select>

                </main>

                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Brand</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        Popular
                        </option>
                    </select>

                </main>


                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Caliber</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        10mm
                        </option>
                    </select>

                </main>

                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Grains</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        125
                        </option>
                    </select>

                </main>


                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Rounds</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        1000
                        </option>
                    </select>

                </main>

                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Casing</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        Brass
                        </option>
                    </select>

                </main>

                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Limit</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                        <option>
                        None
                        </option>
                    </select>

                </main>

        </div>

    </div>
  )
}
