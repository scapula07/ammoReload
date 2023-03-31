import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Dealer from './pages/Dealer'
import Layout from './layout'
import Home from './pages/Home'
import BecomeDealer from './pages/BecomeDealer'
import ListingDealers from './pages/ListingDealer'
import Ammo from './pages/Ammo'
import Ratings from './pages/Rating'
import Guns from './pages/Ammo/guns'
import Rifle from './pages/Ammo/rifle'
import Shotguns from './pages/Ammo/shotguns'
import HandGuns from './pages/Ammo/handGuns'
import Mags from './pages/Ammo/mags'
import Bullets from './pages/Ammo/bullets'
import Rimfire from './pages/Ammo/rimfire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
           <Route exact path="/"  element={ <Layout ><Home   /></Layout>} />
           <Route  exact path="/dealers"  element={ <Layout ><Dealer   /></Layout>} />
           <Route  exact path="/become-dealer"  element={ <Layout ><BecomeDealer   /></Layout>} />
           <Route  exact path="/listing"  element={ <Layout ><ListingDealers   /></Layout>} />
           <Route  exact path="/ammos"  element={ <Layout ><Ammo   /></Layout>} >
              <Route  exact path=""  element={ <Guns />} />
              <Route  exact path="handguns"  element={ <HandGuns />} />
              <Route  exact path="shotguns"  element={ <Shotguns />} />
              <Route  exact path="mags"  element={ <Mags />} />
              <Route  exact path="bullets"  element={ <Bullets />} />
              <Route  exact path="rifles"  element={ <Rifle />} />
              <Route  exact path="rimfire"  element={ <Rimfire/>} />
            </Route>
           <Route  exact path="/ratings"  element={ <Layout ><Ratings   /></Layout>} />
        </Routes>
    
    </div>
  )
}

export default App
