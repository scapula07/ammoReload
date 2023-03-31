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
import { Link,Outlet } from 'react-router-dom'


const Banner=({setTitle})=>{
    return(
      <div className='h-28 flex items-center px-20 '  style={{background:"#F62121"}} >
  
        <main className='flex items-center text-white space-x-10'>
          
            <select style={{background:"#F62121"}} >
            <option>All AMMO</option>
          </select>
           
           <Link to="handguns"> <h5 onClick={()=>setTitle("Handguns")}>HANDGUN</h5></Link>
           <Link to="rifles"> <h5 onClick={()=>setTitle("Rifles")}>RIFLE</h5></Link>
           <Link to="rimfire"><h5 onClick={()=>setTitle("Rimfire")}>RIMFIRE</h5></Link>
           <Link to="shotguns"> <h5 onClick={()=>setTitle("Shotguns")}>SHOTGUN</h5> </Link>
           <Link to=""><h5 onClick={()=>setTitle("Guns")}>GUNS</h5></Link>
           <Link to="mags"> <h5 onClick={()=>setTitle("Magazines")}>MAGAZINES</h5></Link>
           <Link to="bullets"> <h5 onClick={()=>setTitle("Bullets")}>BULLETS</h5></Link>
        </main>
        <main></main>
  
      </div>
    )
  }





  const Top=({searchQuery,setQuery,count,title})=>{


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
              <h5 className='text-3xl font-semibold ' >Total: {count} {title}</h5>
  
          </main>
      </div>
    )
  }

  

export default function Ammo() {
    const [ammoCollection, setAmmoCollection] = useRecoilState(AmmosState)
    const [ammo, setAmmo] = useState({})
    const [isLoading,setLoading]=useState(true)

    const [searchQuery,setQuery]=useState("")
    const [title,setTitle]=useState("Guns")


    
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
    keys:["name","actionType","manufacturer","price"]
  })

  const result=fuse.search(searchQuery)
  console.log(result,"result")
   
  return (
    <div className='w-full'>
        <div className=''>
            <img src={ammoImg}/>

        </div>
        <div className='py-10'>
           <Banner setTitle={setTitle} />
        </div>

        <Top setQuery={setQuery} searchQuery={searchQuery} count={ammoCollection?.length} title={title}/>

        <div className='flex py-20 w-full  justify-between' > 
          <main className='px-20  w-4/12'>
            <Filter  setQuery={setQuery} searchQuery={searchQuery}/>
          </main>

          <main className='w-3/5 px-20' > 
             <Outlet context={[result,isLoading,ammoCollection]}/>

          </main>

        </div>
       


        
    </div>
  )
}
