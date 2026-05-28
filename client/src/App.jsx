import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tracks from './components/Tracks'
import Footer from './components/Footer'

function App() {

	return (
		<>
		<div id="bg"></div>
    	<div id="app" className="grid grid-rows-[15%_1fr_10px] h-screen absolute left-[50%] transform -translate-x-1/2">
		  <Header class="grid-row-start-1"/>
		  
		  <main className="grid-row-start-2 w-[100%]">
			  {/* <Tracks/> */}
		  </main>
		  <Footer className="grid-row-start-3"/>
			</div>
	</>
  )
}

export default App
