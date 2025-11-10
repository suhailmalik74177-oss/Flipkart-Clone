import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './routers/Router'
import Footer from './pages/Footer'
import { UserProvider } from './pages/UserContext'


function App() {

  return (
   <UserProvider>
   <Navbar />
    <AppRouter />
   <Footer />
    </UserProvider>
  )
}

export default App
