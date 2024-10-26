import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  
    return (
      <>
      <Header />
      <Content color= {"orange"} candy = {"candy corn"} />

      <Footer />

      </>
    );
  }
  

  
 
export default App
