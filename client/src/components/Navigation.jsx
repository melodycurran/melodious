import Tracks from '../views/Tracks'
import Playlists from '../views/Playlists'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Logout from './Logout'


function Navigation() {
	const [activeLink, setActiveLink] = useState('home')
	const { user } = useAuth();

	return (

			<nav>
				<ul className="flex gap-4">
					<Link to="/tracks" onClick={() => setActiveLink('/tracks')}
					className={activeLink === '/tracks' ? 'text-red-500' : 'text-gray-500'}
					>Tracks</Link>
					<Link to="/playlists" onClick={() => setActiveLink('/playlists')}
					className={activeLink === '/playlists' ? 'text-red-500' : 'text-gray-500'}
				>Playlists</Link>
				{user && <Logout/>}
				</ul>
			</nav>
	
	
	)
}

export default Navigation