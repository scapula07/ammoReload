import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import {AiOutlineClose} from "react-icons/ai"
import { doc,getDoc,setDoc }  from "firebase/firestore";
import { signUp,db ,auth} from '../firebase';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"

export default function Layout({children}) {
     const [trigger,setTrigger]=useState(false)
     const [isLogIn,setIsLogin]=useState(false)
     const [errors,setError]=useState({})
     const [loading, setLoading]=useState(false)
     const [email,setEmail]=useState("")
     const [name,setName]=useState({})
     const [password,setPassword]=useState("")

     let navigate = useNavigate();


   const validate =(e)=> { 
      console.log("validating")
     
      if (e.target.name==="email") {
    
        console.log("validating email")
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
          setError({
            email:'Invalid email address'
          })
        } 
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
          setError({
            email:''
          })
        } 
      } 
      if (e.target.name==="password") {
    
        console.log("validating password")
        if (e.target.value.length<=6){
          console.log("top")
          setError({
            password:"Password is too short"
          })
        } 

      if (e.target.value.length>=6){
        console.log("bottom")
        setError({
          password:"Password strength is good"
        })
      } 
      } 
   
    
    

    };



   const signUpWithEmail=async()=>{

      if( email===""&& password==="") return  setError({ email:'Email field is required', password:'Password field is required' })

     setLoading(true)

     try{ 
         
          const userCredential  = await signUp(email,password)
          console.log(userCredential,"cred")
          const user=userCredential.user
          const uid=user.uid
          
          const userRef =doc(db,"users",uid)
      
          const payload={email,name}
          console.log(await setDoc(userRef,payload))
          uid.length >0&& navigate('/')
     }catch(e){
       
         setLoading(false)
     
          if(e.message==="Firebase: Error (auth/invalid-email)."){
           return   setError({firebase:"Invalid email"})
         
       }else if(e.message==="Firebase: Error (auth/internal-error)."){
           return   setError({
             firebase:"Poor internet connection"
           })
           // return  toast.error("Poor internet connection")
       }else{
         toast.error("Something went wrong! ,try again")
       }


       
       
        
     }
     setLoading(false)
    
}

const siginIn =async()=>{
   if( email===""&& password==="") return  setError({ email:'Email field is required', password:'Password field is required' })
   setLoading(true)
 try{
   const userCredential  = await logIn(email,password)
   const user=userCredential?.user
   const uid=user.uid
   uid.length >0&& navigate('/')
 }catch(e){
   console.log(e)

   setLoading(false)
       
   if(e.message==="Firebase: Error (auth/missing-email)."){
    return   setError({firebase:"Invalid email"})
  
   }else if(e.message==="Firebase: Error (auth/internal-error)."){
       return   setError({
         firebase:"Poor internet connection"
       })
       // return  toast.error("Poor internet connection")
   }else{
     toast.error("Something went wrong! ,try again")
   }
 }

}

console.log(errors,"err")
    return (
      <>
      <div className=" relative layout  w-screen    overflow-x-hidden h-full">
            <div className='fixed w-full bg-white py-6 px-8 z-20 '>
              <Header setTrigger={setTrigger}/>
            </div>
            
          <div className=" lg:py-32 py-20 h-full" >
              {children}
            </div>
  
            <div className='px-8 bg-color w-full h-28 ' style={{background:"#F62121"}}>
                <Footer />
            </div>
  
            
                   
      </div>

      <Modal trigger={trigger}  cname=" w-1/2 rounded-sm py-10 px-20">
           {isLogIn?


               <>
                    <main className='flex justify-end w-full'>
                      <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin" /></button>
                    </main>

               <main className='w-full flex flex-col justify-center items-center space-y-3'>
                  <main className='flex flex-col  space-y-3'>
                      <h5 className='text-3xl font-semibold'>Log In</h5>
                      <p className='text-sm font-light w-5/6'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi eget lobortis ut mattis auctor. Turpis potenti mauris lectus viverra euismod non velit et. Eu dictum .</p>
                   </main>

                   <div className='flex flex-col w-full space-y-4'>
                

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Email Address</label>
                       <input   className='w-full py-2 border px-2 rounded-md' 
                                value={email}
                                name="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                onKeyPress={(e)=> validate(e)}
                                onKeyDown={(e)=> validate(e)}
                       />
                       {errors.email?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.email}</h5>:null}
                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Password</label>
                       <input  className='w-full py-2 border px-2 rounded-md'
                             onChange={(e)=>setPassword(e.target.value)}
                             name="password"
                             value={password}
                             onKeyPress={(e)=> validate(e)}
                       
                       />
                       {errors.password?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.password}</h5>:null}
                    </main>

                    <main className='w-full  flex justify-start'>
                    <h5 className=' text-blue-900 text-xs py-4 rounded-md ' onClick={()=>setIsLogin(false)}>Forgot Password?</h5>
                    </main>

                    <main className='w-full  '>
                         <button className='w-full bg-blue-900  text-white py-4 rounded-md flex items-center justify-center' onClick={siginIn}>
                             {loading&&<ClipLoader color="white" loading={loading}/>}
                      
                             {!loading&&  <span>Login</span>}
                   
                           
                           </button>
                    </main>

                     
                    <main className='w-full flex justify-center '>
                         <h5 className=' text-blue-900 text-xs py-4 rounded-md ' onClick={()=>setIsLogin(false)}>Don’t have account ? Sign up</h5>
                    </main>
                 </div>

                 </main>

               </>
               :

            <>
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
                       <input  className='w-full py-2 border px-2 rounded-md' 
                          value={name.firstName}
                         onChange={(e)=>setName({firstName:e.target.value})}
                       />

                    </main>
                    <main className='flex flex-col w-full space-y-2'>
                       <label>Last Name</label>
                       <input   className='w-full py-2 border px-2 rounded-md' 
                          value={name.lastName}
                          onChange={(e)=>setName({LastName:e.target.value})}
                       />

                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Email Address</label>
                       <input className='w-full py-2 border px-2 rounded-md' 
                                 value={email}
                                 name="email"
                                 onChange={(e)=>setEmail(e.target.value)}
                                 onKeyPress={(e)=> validate(e)}
                                 onKeyDown={(e)=> validate(e)}
                       />
                       {errors.email?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.email}</h5>:null}
                    </main>

                    <main className='flex flex-col w-full space-y-2'>
                       <label>Password</label>
                       <input  className='w-full py-2 border px-2 rounded-md' 
                            onChange={(e)=>setPassword(e.target.value)}
                            name="password"
                            value={password}
                            onKeyPress={(e)=> validate(e)}
                       
                       />
                       {errors.password?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{errors.password}</h5>:null}
                    </main>

                    <main className='w-full  flex items-center space-x-2'>
                       <input type="checkbox" />
                       <h5 className='text-sm'>By signing up you agree with the terms and condition</h5>
                       
                    </main>

                    <main className='w-full  '>
                         <button className='w-full bg-blue-900  text-white py-4 rounded-md flex items-center justify-center' onClick={signUpWithEmail}>
                               {loading&&<ClipLoader color="white" loading={loading}/>}
                      
                               {!loading&&  <span>Sign up</span>}
                           
                           </button>
                    </main>
                     
                    <main className='w-full flex justify-center '>
                         <h5 className=' text-blue-900 text-xs py-4 rounded-md ' onClick={()=>setIsLogin(true)}>Have an account ? Log In</h5>
                    </main>
                 </div>
             </main>
             </>
              
           }
      </Modal>

      </>
    )
  }