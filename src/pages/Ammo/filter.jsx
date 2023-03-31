import React from 'react'
import filter from "../../assets/filter.png"
import { AmmosState } from '../../Recoil/globalState'
import { useRecoilValue } from 'recoil'
import { useEffect,useState } from 'react'
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Filter() {

    const [manufacturer,setManufacturers] =useState([])
    const [actionType,setType]=useState([])
    const [ammoCollection, setAmmoCollection] = useState([])
    const [ammo, setAmmo] = useState({})

    useEffect(() => {
        const getCollections = async () => {
          const q = query(collection(db, "guns"));
          const querySnapshot = await getDocs(q);
          const manufacturer= []
          const actionType=[]
          // console.log(querySnapshot)
          querySnapshot.docs.map((doc) => {
            // console.log(doc.data())
            manufacturer.push(doc.data().manufacturer)
            actionType.push(doc.data().actionType)
           
    
    
          })
        //   setAmmoCollection( ammoList)
        setManufacturers([...new Set(manufacturer)])
        setType([...new Set(actionType)])

         
        }
        getCollections()
      }, [])
    
      console.log(manufacturer,"ammofilter")
      console.log( actionType,"ammofilter")




    


  
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
                        {manufacturer.map((manufacturer)=>{
                            // console.log(ammo.manufacturer,"manu")
                                
                            return(
                                <option>
                                  {manufacturer}
                               </option>

                            )
                        })
                        
                         } 
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
                    <h5 className='text-base font-semibold '>Action Type</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                    {actionType.map((type)=>{
                            // console.log(ammo.manufacturer,"manu")
                                
                            return(
                                <option>
                                  {type}
                               </option>

                            )
                        })
                        
                         } 
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
