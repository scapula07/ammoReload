import React,{useEffect,useState} from 'react'
import ammoImg from "../../assets/ammoHero.png"
import {BsSearch} from "react-icons/bs"
import Filter from './filter'
import ammoItem  from "../../assets/ammoItem.png"
import {AiFillStar} from "react-icons/ai"
import {FaShareAlt} from "react-icons/fa"
import flag from "../../assets/flag.png"
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import Fuse from "fuse.js"
import ScaleLoader from "react-spinners/ScaleLoader";
import { AmmosState } from '../../Recoil/globalState'
import { useRecoilState } from 'recoil'



const Banner=()=>{
    return(
      <div className='h-28 flex items-center px-20 '  style={{background:"#F62121"}} >
  
        <main className='flex items-center text-white space-x-10'>
          
            <select style={{background:"#F62121"}} >
            <option>All AMMO</option>
          </select>
           
            <h5>HANDGUN</h5>
            <h5>RIFLE</h5>
            <h5>RIMFIRE</h5>
            <h5>SHOTGUN</h5>
            <h5>RIMFIRE</h5>
            <h5>GUNS</h5>
            <h5>MAGAZINES</h5>
            <h5>BULLETS</h5>
        </main>
        <main></main>
  
      </div>
    )
  }





  const Top=({searchQuery,setQuery,count})=>{


    return(
      <div className='w-full flex items-center px-20'>
          <main className='flex items-center w-3/5 space-x-12'>
              <div className='flex border items-center w-1/2  px-4 py-2 rounded-md space-x-4' style={{border: "1px solid #D4D4D8"}}>
                <BsSearch className='text-slate-500' />
                <input placeholder='Start searching...'
                    value={searchQuery}
                    onChange={(e)=>setQuery(e.target.value)}
                    className="outline-none"
                />
  
              </div>
  
              <div className='flex'>
                  <h5 style={{color:"#71717A"}}>Sort by:</h5>
                  <select className='outline-none' style={{color:"#71717A"}}>
                     <option>Latest</option>
                  </select>
  
              </div>
  
  
          </main>
           <main className='w-2/5 flex justify-end' >
              <h5 className='text-3xl font-semibold ' >Total: {count} Guns</h5>
  
          </main>
      </div>
    )
  }


  const AmmoCard=({ ammo})=>{
   
    const img =ammo["img-src"]

    return(
      <div className='flex w-full bg-white shadow-lg space-x-4 ' >

      <main className='w-1/4'>
          <img src={img} className="h-full"/>
          
      </main>
      <main className='w-3/4'> 
        <div className='w-full flex justify-end'>
          <button className='text-white px-4  py-1 text-xs' style={{background:" rgba(246, 33, 33, 1)",borderRadius: "0px 8px 8px 0px"}}>New Deal</button>
           
        </div>

           <div className='flex flex-col w-full py-4 space-y-3'>

                <main className='flex w-full items-center '>
                   <div className='flex w-full items-center space-x-4'>
                      <h5>{ammo?.name}</h5>

                      <h5 className='flex items-center space-x-4'>
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

                 <div className='flex flex-col'>

                 </div>
                  <div className='border-t flex item-center w-full justify-between py-4 px-2'>
                      <h5 className='text-slate-400 font-light text-sm '>Updated 3mins ago</h5>
                      <h5  className=' font-semibold text-sm '>{ammo?.price}</h5>

                  </div>


           </div>

      </main>

  </div>
    )
  }
  

export default function Ammo() {
    const [ammoCollection, setAmmoCollection] = useRecoilState(AmmosState)
    const [ammo, setAmmo] = useState({})
    const [isLoading,setLoading]=useState(true)

    const [searchQuery,setQuery]=useState("")


    
    useEffect(() => {
        const getCollections = async () => {
          const q = query(collection(db, "guns"));
          const querySnapshot = await getDocs(q);
          const ammoList = []
          // console.log(querySnapshot)
          querySnapshot.docs.map((doc) => {
            // console.log(doc.data())
            ammoList.push({ ...doc.data(), id: doc.id })
            setAmmo({ ...doc.data(), id: doc.id })
    
    
          })
          setAmmoCollection( ammoList)

          ammoList.length >0 && setLoading(false)
        }
        getCollections()
      }, [])
    

  
  const fuse =new Fuse(ammoCollection,{
    keys:["name","actionType","manufacturer"]
  })

  const result=fuse.search(searchQuery)
   
  return (
    <div className='w-full'>
        <div className=''>
            <img src={ammoImg}/>

        </div>
        <div className='py-10'>
           <Banner />
        </div>

        <Top setQuery={setQuery} searchQuery={searchQuery} count={ammoCollection?.length} />

        <div className='flex py-20 w-full  justify-between' > 
          <main className='px-20  w-4/12'>
            <Filter />
          </main>

          <main className='w-3/5 px-20' > 
             <div className='flex flex-col w-full space-y-10 overflow-y-scroll' style={{height:"200vh"}}>
                {isLoading?
                   <div className='w-full flex items-center justify-center'>
                       <ScaleLoader  color="#F62121" loading={isLoading} />

                   </div>
                 :
                 <>
                {result.length ===0?
                   <>
                     {ammoCollection?.map((ammo)=>{
                        return(
                           <AmmoCard  ammo={ammo}/>

                         )
                       })

                     }
                   
                   </>

                   :

                   <>
                      {
                         result?.map((ammo)=>{
                             return(
                               <AmmoCard  ammo={ammo?.item}/>
   
                          )

                         })


                      }

                   </>

                }
                </>

                }

              </div>
            

          </main>

        </div>
       


        
    </div>
  )
}
