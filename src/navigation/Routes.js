import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SkaterAsset } from '../assets/Assets'
import ContactView from '../views/Contact/ContactView'
import HomeView from '../views/HomeView/HomeView'
import LoginView from '../views/LoginView/LoginView'

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/login" element={<LoginView />} />
            <Route exact path="/contact" element={<ContactView />} />
            <Route exact path="/skater-life" element={<ContactView />}/>
            <Route exact path="/" element={<HomeView />} />
        </Routes>
    </div>
  )
}

export default Routings