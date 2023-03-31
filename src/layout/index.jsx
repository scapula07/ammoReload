import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import {AiOutlineClose} from "react-icons/ai"


export default function Layout({children}) {
     const [trigger,setTrigger]=useState(false)
    return (
      <>
      <div className=" relative layout  w-screen    overflow-x-hidden h-full">
            <div className='fixed w-full bg-white py-6 px-8 z-20 '>
              <Header setTrigger={setTrigger}/>
            </div>
            
          <div className=" py-32 h-full" >
              {children}
            </div>
  
            <div className='px-8 bg-color w-full h-28 ' style={{background:"#F62121"}}>
                <Footer />
            </div>
  
            
                   
      </div>

      <Modal trigger={trigger}  cname=" w-1/2 rounded-sm py-10 px-20">
             <main className='flex justify-end w-full'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
             </main>

              <main className='w-full flex flex-col justify-center items-center space-y-3'>
                 <main className='flex flex-col  space-y-3'>
                 <h5 className='text-3xl font-semibold'>Sign Up</h5>
                 <p className='text-sm font-light w-5/6'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. Turpis potenti mauris lectus viverra euismod non velit et. Eu dictum .</p>
                 </main>


                 <div className='flex flex-col w-full space-y-4'>
                    <main className='flex flex-col w-full space-y-2'>
                       <label>First Name</label>
                       <input  className='w-full py-2 border px-2 rounded-md' />

                    </main>
                    <main className='flex flex-col w-full space-y-2'>
                       <label>Last Name</label>
                       <input   className='w-full py-2 border px-2 rounded-md' />

                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Email Address</label>
                       <input   className='w-full py-2 border px-2 rounded-md' />

                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Password</label>
                       <input  className='w-full py-2 border px-2 rounded-md' />

                    </main>

                    <main className='w-full  flex items-center space-x-2'>
                       <input type="checkbox" />
                       <h5 className='text-sm'>By signing up you agree with the terms and condition</h5>
                       
                    </main>

                    <main className='w-full  '>
                         <button className='w-full bg-blue-900  text-white py-4 rounded-md '>Sign Up</button>
                    </main>
                     
                    <main className='w-full flex justify-center '>
                         <h5 className=' text-blue-900 text-xs py-4 rounded-md '>Have an account ? Log In</h5>
                    </main>
                 </div>
             </main>


      </Modal>

      </>
    )
  }