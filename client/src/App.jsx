import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

function App() {

	return (
	<AuthProvider>
		<div id="bg"></div>
    	<div id="app" className="grid grid-rows-[15%_1fr_10px] h-screen absolute left-[50%] transform -translate-x-1/2">
		  <Header className="grid-row-start-1"/>
		  
		  <main className="grid-row-start-2 w-full pt-5">
			<Outlet />
		  </main>
		  <Footer className="grid-row-start-3"/>
		</div>
	</AuthProvider>
  )
}

export default App
