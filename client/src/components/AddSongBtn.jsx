import { useState } from 'react';

function AddSongBtn({ song }) {
	const [added, setAdded] = useState(false);
	const [message, setMessage] = useState("");
	
	const handleAddToPlaylist = () => {
		fetch('http://localhost:3001/playlists/addSong', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ songId: song.id, playlistId: 1, songName: song.name, image: song.album_image, songArtist: song.artist_name, audio: song.audio })
		})
		.then((response) => response.json())
			.then((data) => {
				setMessage(data.message);
			})
			.catch((error) => console.error('Error adding song to playlist:', error));
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