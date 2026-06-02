import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tracks from './views/Tracks'
import Playlists from './views/Playlists'
import Song from './views/Song'

const router = createBrowserRouter([
  {
    path: '/',
	element: <App />,
	children: [
		{
			path: "/tracks",
			element: <Tracks />
		},
		{
			path: "/playlists",
			element: <Playlists />
		},
		{
			path: "/tracks/:id",
			element: <Song />
		},
	]}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
