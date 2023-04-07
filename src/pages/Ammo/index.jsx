import React,{useEffect,useState} from 'react'
import ammoImg from "../../assets/ammoHero.png"
import {BsSearch} from "react-icons/bs"
import Filter from './filter'
import ammoItem  from "../../assets/ammoItem.png"
import mobile  from "../../assets/mobile.png"
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
import "./ammo.css"


const Banner=({setTitle})=>{
    return(
      <div className='h-28 flex items-center lg:px-20 px-10'  style={{background:"#F62121"}} >
  
        <main className='flex items-center text-white space-x-10 overflow-x-scroll py-4 lg:py-0'>
          
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





  const Top=({searchQuery,setQuery,count,title,bulletCount})=>{
      console.log(title,"count")

    return(
      <div className='w-full flex lg:flex-row flex-col-reverse items-center lg:px-20 '>
          <main className='flex lg:flex-row flex-col items-center lg:w-3/5 w-full px-6 lg:px-0 lg:space-x-12 py-4 lg:py-0 space-y-4 lg:space-y-0'>
              <div className='flex border items-center  lg:w-1/2 w-full px-4 py-2 rounded-md lg:space-x-4 space-x-8' style={{border: "1px solid #D4D4D8"}}>
                <BsSearch className='text-slate-500' />
                <input placeholder='Start searching...'
                    value={searchQuery}
                    onChange={(e)=>setQuery(e.target.value)}
                    className="outline-none"
                />
  
              </div>
  
              <div className='flex w-full justify-end lg:justify-start'>
                  <h5 style={{color:"#71717A"}}>Sort by:</h5>
                  <select className='outline-none' style={{color:"#71717A"}}>
                     <option>Latest</option>
                  </select>
  
              </div>
  
  
          </main>
           <main className='lg:w-2/5 w-full  flex lg:justify-end justify-center' >
                {title==="bullets" ?
                  <h5 className='lg:text-3xl text-xl font-semibold ' >Total: {bulletCount} {title}</h5>
                :
                <h5 className='lg:text-3xl text-xl font-semibold ' >Total: {count} {title}</h5>
                
                   }
          </main>
      </div>
    )
  }

  

export default function Ammo() {
    const [ammoCollection, setAmmoCollection] = useRecoilState(AmmosState)
    const [bulletCollection,setBullet]= useState([])
    const [rifleCollection,setRifle]= useState([])
    const [ammo, setAmmo] = useState({})
    const [isLoading,setLoading]=useState(true)

    const [searchQuery,setQuery]=useState("")
    const [title,setTitle]=useState("Guns")


    
    useEffect(() => {
        const getCollections = async () => {
          const q = query(collection(db, "guns"));
          const qB = query(collection(db, "ammos"));
          const qR = query(collection(db, "rifles"));

          const querySnapshot = await getDocs(q);
          const querySnapshotBullet = await getDocs(qB);
          const querySnapshotRifle = await getDocs(qR );

          const ammoList = []
          const bulletList = []
          const rifleList = []
          // console.log(querySnapshot)
          querySnapshot.docs.map((doc) => {
            // console.log(doc.data())
            ammoList.push({ ...doc.data(), id: doc.id })
            setAmmo({ ...doc.data(), id: doc.id })
    
    
          })

          querySnapshotBullet.docs.map((doc) => {
            // console.log(doc.data())
            bulletList.push({ ...doc.data(), id: doc.id })
            setAmmo({ ...doc.data(), id: doc.id })
    
    
          })


          querySnapshotRifle.docs.map((doc) => {
            // console.log(doc.data())
            rifleList.push({ ...doc.data(), id: doc.id })
            setAmmo({ ...doc.data(), id: doc.id })
    
    
          })
          setAmmoCollection( ammoList)
          setBullet(bulletList)
          setRifle(rifleList)
           
          ammoList.length >0 && setLoading(false)
        }
        getCollections()
      }, [])
    

  
  const fuse =new Fuse([...ammoCollection,...bulletCollection],{
    keys:["name","actionType","manufacturer","price"]
  })

  const result=fuse.search(searchQuery)
  console.log(result,"result")
  
  console.log(rifleCollection,"rifle")
   
  return (
    <div className='w-full'>
        <div className='w-full'>
            <img src={ammoImg} className="sm:block hidden w-full"/>
            <img src={mobile} className="sm:hidden block w-full"/>

        </div>
        <div className='py-10'>
           <Banner setTitle={setTitle} />
        </div>

        <Top setQuery={setQuery} searchQuery={searchQuery} count={ammoCollection?.length} bulletCount={bulletCollection?.length} title={title}/>

        <div className='flex lg:flex-row flex-col  lg:py-20  w-full  lg:justify-between' > 
          <main className=' lg:px-20  px-6 lg:w-4/12 w-full pb-20'>
              <Filter  setQuery={setQuery} searchQuery={searchQuery}/>
          </main>

          <main className='lg:w-3/5 w-full lg:px-20 px-6'  > 
             <Outlet context={[result,isLoading,ammoCollection,bulletCollection,rifleCollection]}/>

          </main>

        </div>
       


        
    </div>
  )
}
