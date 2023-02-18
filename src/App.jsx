import React from 'react'
import Community from './components/Community'
import Footer from './components/Footer'
import Subscription from './components/Subscription'

function App() {
  return (
    <div className="font-karla text-[16px] bg-[#E6EFF6] h-screen flex justify-center items-center">
      <div className="w-[90%] grid md:grid-cols-2 md:max-w-xl">
        <Community />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}

export default App