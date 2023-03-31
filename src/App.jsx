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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
           <Route exact path="/"  element={ <Layout ><Home   /></Layout>} />
           <Route  exact path="/dealers"  element={ <Layout ><Dealer   /></Layout>} />
           <Route  exact path="/become-dealer"  element={ <Layout ><BecomeDealer   /></Layout>} />
           <Route  exact path="/listing"  element={ <Layout ><ListingDealers   /></Layout>} />
           <Route  exact path="/ammos"  element={ <Layout ><Ammo   /></Layout>} />
           <Route  exact path="/ratings"  element={ <Layout ><Ratings   /></Layout>} />
        </Routes>
    
    </div>
  )
}

export default App
