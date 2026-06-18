import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function AddSongBtn({ song }) {
	const [added, setAdded] = useState(false);
	const [message, setMessage] = useState("");
	const { user } = useAuth();
	
	const handleAddToPlaylist = async () => {

		if (!user) {
			setMessage('Log in to add song to a playlist')
		}
		const response = await fetch('http://localhost:3001/playlists/addSong', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ songId: song.id, playlistId: 1, songName: song.name, image: song.album_image, songArtist: song.artist_name, audio: song.audio, userId: user.user_id })
		})
		const data = await response.json()

		if (response.ok) {
			setMessage(`Success: ${data.message}`);
		} else {
			setMessage(`Error: ${data.message}`)
		}
	};

   return (
 	<div>
 	  <button className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600" onClick={handleAddToPlaylist}>
 		Add to Playlist
		   </button>
		   <div>
			   {message && <p className="text-green-500">{message}</p>}
		</div>
 	  
 	</div>
   );
}
 
export default AddSongBtn;