import React from 'react'
import filter from "../../assets/filter.png"
import { AmmosState } from '../../Recoil/globalState'
import { useRecoilValue } from 'recoil'
import { useEffect,useState } from 'react'
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"

export default function Filter({setQuery}) {

    const [manufacturer,setManufacturers] =useState([])
    const [actionType,setType]=useState([])
    const [ammoCollection, setAmmoCollection] = useState([])
    const [ammo, setAmmo] = useState({})
    const [priceRange,setPrice]=useState([])
    
    let count =6
    let shipCount=6

    useEffect(() => {
        const getCollections = async () => {
          const q = query(collection(db, "guns"));
          const querySnapshot = await getDocs(q);
          const manufacturer= []
          const actionType=[]
          const price=[]
        
          querySnapshot.docs.map((doc) => {
           
            manufacturer.push(doc.data().manufacturer)
            actionType.push(doc.data().actionType)
            price.push(doc.data().price)
    
    
          })
       
        setManufacturers([...new Set(manufacturer)])
        setType([...new Set(actionType)])
        setPrice([...new Set(price)])

         
        }
        getCollections()
      }, [])
    
     console.log(priceRange,"price")

    console.log(filter,"filter search")

    


  
  return (
    <div className='w-full'>  
       <main className='flex justify-end w-full lg:block'>
                <div className='flex items-center border w-36 justify-center space-x-4 py-2 rounded-md '>
                    <img src={filter} />

                    <h5 className='text-base font-semibold  '>Filter</h5>

                </div>
        </main>

        <div className='w-full lg:block hidden'>
  
        <div className='w-full flex flex-col space-y-4 py-10'>
            <h5 className='text-base font-semibold '>Dealers (120 onboard)</h5>
            <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400'>
                <option>
                 2A Warehouse
                </option>
            </select>

         </div>

         <div className='w-full flex flex-col space-y-4 py-10'>
            <h5 className='text-base font-semibold '>Ammo Star Rating</h5>
            {[1,2,3,4,5].map(()=>{
                 count=count - 1
                 console.log(Array(count),"array count")
                return(
                    <div className='flex items-center space-x-2'>
                        <input type="checkbox" /> 
                        <main className='flex space-x-1 '>
                            { Array(count).fill("1").map(()=>{
                                 return(
                                    <AiFillStar className='text-2xl' style={{color:"#F62121"}}/>
                                 )
                            })

                            }
                             { Array(5 - count).fill("1").map(()=>{
                                 return(
                                    <AiOutlineStar className='text-2xl font-extralight' />
                                 )
                            })

                            }

                        </main>
                         
                         <h5>{count} star</h5>
                    </div>
                )
            })

            }

         </div>
           

        <div className='w-full flex flex-col '>
               <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Price  Range</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400' onChange={(e)=>setQuery(e.target.value)}>
                    {priceRange.map((price)=>{
                           
                                
                            return(
                                <option value={price} >
                                  
                                     {price}
                                   
                                
                               </option>

                            )
                        })
                        
                         } 
                    </select>

                </main>

                <main className='w-full flex flex-col space-y-4 py-10'>
                    <h5 className='text-base font-semibold '>Brand</h5>
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400' onChange={(e)=>setQuery(e.target.value)}>
                        {manufacturer.map((manufacturer)=>{
                            // console.log(ammo.manufacturer,"manu")
                                
                            return(
                                <option value={manufacturer} >
                                  
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
                    <select className='text-xs border w-full py-3 px-3 rounded-md text-slate-400' onChange={(e)=>setQuery(e.target.value)}>
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


         <div className='w-full flex flex-col space-y-4 py-10'>
            <h5 className='text-base font-semibold '>Shipping Rate</h5>
            {[1,2,3,4,5].map(()=>{
                 shipCount=shipCount - 1
                
                return(
                    <div className='flex items-center space-x-2'>
                        <input type="checkbox" /> 
                        <main className='flex space-x-1 '>
                            { Array(shipCount).fill("1").map(()=>{
                                 return(
                                    <AiFillStar className='text-2xl' style={{color:"#F62121"}}/>
                                 )
                            })

                            }
                             { Array(5 - shipCount).fill("1").map(()=>{
                                 return(
                                    <AiOutlineStar className='text-2xl font-extralight' />
                                 )
                            })

                            }

                        </main>
                         
                         <h5>{shipCount} star</h5>
                    </div>
                )
            })

            }

         </div>

         <main className='flex justify-center w-full text-white '> 
            <button className='bg-blue-900 py-2 w-full text-sm'>View all results</button>
         </main>

        </div>
        </div>

    </div>
  )
}
