import React from 'react'
import './index.css'
import { Hero } from './components/template/pocket/Hero'
import { Header } from './components/template/pocket/Header'
import { PrimaryFeatures } from './components/template/pocket/PrimaryFeatures'
import { Footer } from './components/template/pocket/Footer'
function App() {

  return (
    <>
      <Header />
      <Hero />
      <PrimaryFeatures />
      <Footer />
    </>
  )
}

export default App
