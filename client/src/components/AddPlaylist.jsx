import { useEffect, useState } from "react";

function AddPlaylist({ user_id, playlist }) {

	const addPlaylist = async (e) => {
		e.preventDefault();

		if (!user_id) return;

		try {

			const payload = {
				userId: user_id,
				songs: playlist
			};

			const response = await fetch('http://localhost:3001/playlists/addPlaylist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload)
			});

			const data = await response.json();

			console.log('user_data', data)
			
		} catch (error) {
			console.error(error)
		}
	}
	
	console.log('playlist passed down', playlist)
	console.log('user_id passed down', user_id)

	return (
		<button className="bg-cyan-500 p-2 rounded-md m-2" onClick={addPlaylist}>Save Playlist</button>
	)
}

export default AddPlaylist;