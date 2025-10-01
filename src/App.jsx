import React from 'react'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import SingleRoute from './pages/singleRoute/SingleRoute'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/product/:id" element={<SingleRoute />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
