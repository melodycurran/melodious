import { useState, useEffect } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function Playlists() {
	const [playlists, setPlaylists] = useState([]);
	const [songToPlay, setSongToPlay] = useState(null);
	const [message, setMessage] = useState('');

	useEffect(() => {
	const playlists = fetch('http://localhost:3001/playlists/getPlaylist')
		.then(response => response.json())
		.then(data => {
			setPlaylists(data);
		})
		.catch(error => console.error('Error fetching playlists:', error));
	}, []);

	const deleteSong = (songId, songName) => {
		fetch('http://localhost:3001/playlists/deleteSong', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ songId, songName })
		})
		.then(response => response.json())
		.then(data => {
			const newPlaylists = playlists.filter(song => song.songId !== songId);
			setPlaylists(newPlaylists);
			setMessage(data.message);

			if (songToPlay && songToPlay.songId === songId) {
				setSongToPlay(null);
			}
		})
		.catch(error => console.error('Error deleting song from playlist:', error));
	};

	return (
		<div>
			<p>Playlists are temporarily stored in the server. Data are lost after restart.</p>

			<div className="pt-4 bg-white/50 rounded-lg shadow-md py-10">
				<section id='songPlaying' className="w-full flex flex-col items-center mb-6 p-3">
					{
						songToPlay == null ? 
						<>
								<img src={playlists[0]?.image} alt={playlists[0]?.songName} className="w-full rounded-lg mb-4" />
							
								{playlists[0]?.audio == null ? <p>No songs in playlist</p> : <audio src={playlists[0]?.audio} controls autoPlay className="w-full" />}
							
						</>
							: 
						<>
							<img src={songToPlay?.image} alt={songToPlay?.songName} className="w-full rounded-lg mb-4" />
	
							{playlists[0]?.audio == null ? <p>No songs in playlist</p> : <audio src={songToPlay?.audio} controls autoPlay className="w-full" />}
						</>
					}
				</section>
				{playlists.map((song, index) => (
					<div key={index} className ="flex justify-between items-center border-b-1 border-gray-600 py-2 px-4">
						<p>{song.songName} by {song.songArtist}</p>
						<section className="flex gap-4 text-2xl">
							<FaPlayCircle onClick={() => setSongToPlay(song)} />
							<IoMdCloseCircle onClick={() => {
								deleteSong(song.songId, song.songName);
							}} />
						</section>

					</div>
				))}	
			</div>
			{message && <p className="mt-4 text-green-500">{message}</p>}
		</div>
	)
}

export default Playlists