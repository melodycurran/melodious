import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import AddSongBtn from '../components/AddSongBtn';

function Tracks() {
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/jamendo')
			.then((response) => response.json())
			.then((data) => {
				if (data) {
                    setTracks(data);
                }
			})
			.catch((error) => console.error('Error fetching tracks:', error));
	}, []);

	return (
		// absolute left-[50%] transform -translateK-x-1/2 z-10
		<div id="tracks" className="flex flex-row flex-wrap justify-center">
			{tracks.map((track) => (
				<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col bg-gray-400 m-2 p-4 rounded items-center text-black text-pretty" key={track.id}>
					<Link to={`/tracks/${track.id}`}>
						<img src={track.album_image} alt={track.album_name} key={track.album_id} className="w-32 h-32 object-cover"/>
						<ul className="text-center text-xs mt-2">
							<li key={track.id}>Title: {track.name}</li>
							<li key={track.artist_id}>Artist: {track.artist_name}</li>
						</ul>
					</Link>
					<AddSongBtn song={track} />
				</div>
			))}
			
		</div>
	);
}

export default Tracks;