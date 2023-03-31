import React,{useState} from 'react'
import revover from "../../assets/revover.png"
import {MdCheck} from "react-icons/md"
import AdSpace from './adSpace'
import Modal from '../../components/Modal'
import {AiOutlineClose} from "react-icons/ai"




const TopPart=()=>{
    return(
        <div className='w-full flex px-20 justify-between'>
             <main className='w-1/2'>
                <h5 className='text-4xl font-bold ' style={{color: "#3F3F46"}}>Check out How you can list your website/product</h5>
                 <p className='font-light text-xs py-10'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                 </p>
                 
            <button className='text-white w-72 py-4 text-base font-light rounded-md' style={{background:"#0F255C"}}>Become a dealer</button>
              

             </main>
             <main className='w-1/2 justify-end flex'>
                <img src={revover} className="w-96 h-96" />

             </main>

        </div>
    )
}


const Subscription=()=>{
    return(
        <div className='py-28 flex items-center  flex-col '>
             <div className='flex flex-col w-full  items-center w-2/5'>
                 <h5 className='text-3xl font-bold'>This is our subscription plans</h5>
                 <p className='font-light text-xs text-center py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.</p>

             </div>

             <div className='w-full flex justify-center  py-10 items-center'>
                {[1,2,3].map(()=>{
                    return( 
                         <div className='  h-72  w-1/6 rounded-lg hover:h-96 hover:bg-blue-900 py-8 hover:text-white hover:shadow-blue-900' style={{border: "1px solid #0F255C"}}>
                             <div className='flex flex-col items-center space-y-4'>
                                 <h5 className='text-l font-semibold'>DAILY</h5>
                                 <h5 className='flex space-x-2 items-center'>
                                   <span className='text-3xl font-extrabold'>$100 </span> 
                                   <span className='text-xs ' style={{}}>Per day</span>
                                 </h5>

                                 <main className='flex flex-col space-y-1'>
                                    <h5 className='flex items-center space-x-1'>
                                        <MdCheck />
                                        <span className='text-xs'>List your website URL</span>
                                    </h5>
                                    <h5 className='flex items-center space-x-1'>
                                        <MdCheck />
                                        <span className='text-xs'>List your website URL</span>
                                    </h5>
                                    <h5 className='flex items-center space-x-1'>
                                        <MdCheck />
                                        <span className='text-xs'>List your website URL</span>
                                    </h5>
                                    <h5 className='flex items-center space-x-1'>
                                        <MdCheck />
                                        <span className='text-xs'>List your website URL</span>
                                    </h5>

                                 </main>

                                 <button className='bg-blue-900 hover:bg-white px-8 text-white py-1 rounded-md text-base font-light hover:text-black'>Get plan</button>


                             </div>
                         </div>
                    )
                })

                }

            </div>
         
             

        </div>
    )
}


const Listing=({setTrigger})=>{
   return(
    
    <div className='py-28 flex items-center  flex-col w-full px-20'>
      <div className='flex flex-col w-full  items-center w-3/5'>
        <h5 className='text-3xl font-bold'>This is what you need to list any ammo</h5>
        <p className='font-light text-xs text-center py-3 w-4/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ps ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        </p>
        </div>
        <div className='flex flex-col  w-full items-center' >
                <main className='grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-4 py-10 w-1/2 w-full'>
                {[1,2,3,4,5,6,7,8,9,10].map(()=>{
                    return(
                        <div className=''>
                            <h5 className='text-blue-900 text-base font-semibold' style={{color: "#0F255C",background: "rgba(253, 211, 211, 0.5)"}}>Listing Ammunitions</h5>
                                 <main className='flex flex-col'>
                                    <h5 className='flex text-sm'>
                                       <span>Your website </span>
                                    </h5>

                                    <h5 className='flex text-sm'>
                                       <span> Product title</span>
                                    </h5>

                                    <h5 className='flex text-sm'>
                                       <span>Product description </span>
                                    </h5>
                                    
                                    <h5 className='flex text-sm'>
                                       <span> Enter price range/price </span>
                                    </h5>

                                    <h5 className='flex text-sm'>
                                       <span> Fill in shipping/ if you do </span>
                                    </h5>


                                    <h5 className='flex text-sm'>
                                       <span> State out purchase </span>
                                    </h5>

                                    <h5 className='flex text-sm'>
                                       <span> Enter number of rounds</span>
                                    </h5>

                                    <h5 className='flex text-sm'>
                                       <span> Others</span>
                                    </h5>


                                </main>

                        </div>
                    )
                })
                  }
             
                 
               </main>
               <button className='bg-blue-900 text-white rounded-md py-3 px-10' onClick={()=>setTrigger(true)}> Become a dealer</button>

        </div>
  
  
     </div>

      
   )
}


export default function BecomeDealer() {

    const [trigger,setTrigger]=useState(false)
  return (
    <>
    <div className='w-full'>
        <TopPart />
        <Subscription />
        <AdSpace />
        <Listing setTrigger={setTrigger}/>

        
    </div>
       <Modal trigger={trigger} cname=" w-11/12  rounded-sm py-10 px-20">
                <main className='flex justify-end w-full'>
                   
                    <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
                    </main>

                <div className='flex flex-col w-full items-center space-y-10 '>
                    <h5 className='text-2xl font-semibold '>Terms & Condition</h5>
                     
                     <div className='overflow-y-scroll flex flex-col space-y-10' style={{height:"480px"}}>
                     <div className='flex flex-col items-start space-y-4 '>
                        <h5 className='text-xl font-semibold'>Buying & selling of ammo</h5>
                         
                         <p className='text-xs'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                             <br></br>
                             <br></br>
                            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                            <br></br>
                            <br></br>
                            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula cons
                         </p>
                     </div>

                     <div className='flex flex-col items-start space-y-4'>
                        <h5 className='text-xl font-semibold'>Buying & selling of ammo</h5>
                         
                         <p className='text-xs'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                             <br></br>
                             <br></br>
                            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                            <br></br>
                            <br></br>
                            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula cons
                         </p>
                     </div>

                     <div className='flex flex-col items-start space-y-4'>
                        <h5 className='text-xl font-semibold'>Buying & selling of ammo</h5>
                         
                         <p className='text-xs'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                             <br></br>
                             <br></br>
                            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                            <br></br>
                            <br></br>
                            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula cons
                         </p>
                     </div>

                     </div>


                </div>

        </Modal>
    </>
  )
}
