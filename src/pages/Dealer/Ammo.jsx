import React ,{useState}from 'react'
import {BsSearch} from "react-icons/bs"
 import Filter from './filter'
 import result from "../../assets/resultImg.png"
 import flag from "../../assets/flag.png"
 import {FaShareAlt} from "react-icons/fa"
 import {AiFillStar} from "react-icons/ai"


 const Top=({searchQuery,setQuery,count,title})=>{


  return(
    <div className='w-full flex lg:flex-row flex-col-reverse items-center lg:px-20 '>
        <main className='flex lg:flex-row flex-col items-center lg:w-3/5 w-full px-6 lg:px-0 lg:space-x-12 py-4 lg:py-0 space-y-4 lg:space-y-0'>
            <div className='flex border items-center  lg:w-1/2 w-full px-4 py-2 rounded-md lg:space-x-4' style={{border: "1px solid #D4D4D8"}}>
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
            <h5 className='lg:text-3xl text-xl font-semibold ' >Total: {"1000"} {"Dealers"}</h5>

        </main>
    </div>
  )
}

const Result=()=>{
  

  return(
      <div className='w-full border-b py-8'>
         <div className='flex flex-col w-full '>
                <div className='w-full flex justify-end'>
                    <button className='text-white px-4  py-1 text-xs' style={{background:" rgba(246, 33, 33, 1)",borderRadius: "0px 8px 8px 0px"}}>New Deal</button>
                  
                  </div>

                  <div className='flex space-x-4'>
                     <img src={result} className="rounded-full lg:w-20 lg:h-20 w-10 h-10"/>

                     <main className='flex w-full justify-between'>
                           
                     <main className='flex flex-col space-y-4'>
                          <h5 className='lg:text-lg text-normal font-semibold'>Target Sport Factory USA</h5>
                            <p className='lg:text-sm text-xs font-light w-3/4'> Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor.</p>
                           <div className='flex items-center space-x-2'> 
                             <h5 className='flex items-center space-x-1'>
                              <AiFillStar className='text-yellow-400 text-xs'/>
                              <span className='text-xs font-light'>5.0</span>

                                </h5>

                                <div className='flex items-center space-x-2'>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>100 Reviews</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Ammo</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Shipping</h5>
                                  <h5 className=' px-1 font-light text-slate-600 text-xs flex items-center justify-center py-1 rounded-md w-24' style={{background:"rgba(239, 239, 239, 1)"}}>Hand guns</h5>
                                </div>
                             </div> 

                             

                      </main>


                         <main className='flex items-center space-x-6'>
                              <FaShareAlt />
                              <img src={flag}/>

                         </main>

                     </main>



                  </div>








         </div>
       </div>
  )
}



export default function Ammo() {
  const [searchQuery,setQuery]=useState("")
  return (
    <div className='w-full lg:px-20 py-8 px-6'> 
        <Top />
       
        <div className='flex lg:flex-row flex-col  lg:py-20  w-full  lg:justify-between' > 
          <main className=' lg:px-20  px-6 lg:w-4/12 w-full pb-20'>
              <Filter  setQuery={setQuery} searchQuery={searchQuery}/>
          </main>
             <main className='w-full flex flex-col  items-center space-y-8 overflow-y-scroll' style={{height:"300vh"}} >
              {[1,2,3,4,5,6,7,8,1,1,1,1,1].map(()=>{
                 return(
                   <Result />
                 )
              })

              }

             </main>
            

        </div>

    </div>
  )
}
