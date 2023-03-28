import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Layout({children}) {
    return (
      <div className=" relative layout  w-screen    overflow-x-hidden h-full">
            <div className='fixed w-full bg-white py-6 px-8 z-20 '>
              <Header />
            </div>
            
          <div className=" py-32 h-full" >
              {children}
            </div>
  
            <div className='px-8 bg-color w-full h-28 ' style={{background:"#F62121"}}>
                <Footer />
            </div>
  
            
                   
      </div>
    )
  }