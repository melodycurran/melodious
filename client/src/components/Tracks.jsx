import { useEffect, useState } from 'react';

function Tracks() {
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/jamendo')
			.then((response) => response.json())
			.then((data) => {
				if (data) {
                    setTracks(data);
                }
			})
			.catch((error) => console.error('Error fetching tracks:', error));
		console.log(tracks);
	}, []);

	return (
		<div className="absolute left-[50%] transform -translate-x-1/2 z-10">
			<h2>Tracks</h2>
			{tracks.map((track) => (
				<>
					<ul>
						<li key={track.id}>{track.name}</li>
						<li key={track.artist_id}>{track.artist_name}</li>
						<li key={track.album_id}>Album: {track.album_name}</li>
					</ul>
					<img src={track.album_image} alt={track.album_name} key={track.album_id} />
					<audio src={track.audio} controls key={track.id}></audio>
				</>
			))}
			
		</div>
	);
}

export default Tracks;