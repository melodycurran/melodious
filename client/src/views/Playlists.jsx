import { useState, useEffect } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaPauseCircle } from "react-icons/fa";
import Login from "../components/Login"
import { useAuth } from '../context/AuthContext';
import AddPlaylist from '../components/AddPlaylist';


function Playlists() {
	const { user } = useAuth();
	const [playlists, setPlaylists] = useState([]);
	const [songToPlay, setSongToPlay] = useState(null);
	const [message, setMessage] = useState('');

	useEffect(() => {
		async function getPlaylist() {
			try {
				const response = await fetch(`http://localhost:3001/playlists/getPlaylist?${user.user_id}`, {
					method: 'GET',
					credentials: 'include'
				});

				const data = await response.json();

				data && setPlaylists(data);

			} catch (error) {
				console.error('Error fetching playlists:', error);
			}
		}

		getPlaylist();
		
	}, []);

	console.log('new data', playlists)

	console.log('user_id from the playlist.jsx', user)

	//Delete song
	const deleteSong = async (song_id, song_name) => {
		try {
			const response = await fetch('http://localhost:3001/playlists/deleteSong', {
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ song_id, song_name })
			});
			const data = await response.json();
			const newPlaylists = playlists.filter(item => item?.song_id !== song_id);

			console.log('newPlaylist', newPlaylists)
			setPlaylists(newPlaylists);
			setMessage(data.message);

			if (songToPlay && songToPlay.song_id === song_id) {
				setSongToPlay(null);
			}

		} catch (error) {
			console.error('Error deleting song from playlist:', error);
		}
	};

	return (
        <div>
            {user !== null ? (
                <>
                    <div className="pt-4 bg-white/50 rounded-lg shadow-md py-10">
                        <section id='songPlaying' className="w-full flex flex-col items-center mb-6 p-3">
                            {songToPlay == null ? (
                                
                                playlists.length > 0 && playlists[0]?.song ? (
                                    <>
                                        <img src={playlists[0].song?.image} alt={playlists[0].song?.songName} className="w-full rounded-lg mb-4 max-w-sm" />
                                        {playlists[0].song?.audio == null ? (
                                            <p>No audio source available</p>
                                        ) : (
                                            <audio src={playlists[0].song?.audio} controls autoPlay className="w-full" />
                                        )}
                                    </>
                                ) : (
                                    <p className="text-gray-500 my-4">Your playlist queue is currently empty.</p>
                                )
                            ) : (
                                <>
                                    <img src={songToPlay?.image} alt={songToPlay?.songName} className="w-full rounded-lg mb-4 max-w-sm" />
                                    {songToPlay?.audio == null ? (
                                        <p>No audio source available</p>
                                    ) : (
                                        <audio src={songToPlay?.audio} controls autoPlay className="w-full" />
                                    )}
                                </>
                            )}
                        </section>

                    
                        {playlists.map((item, index) => {
                            
							const trackData = item?.song;

                            if (!trackData) return null;

                            return (
                                <div key={index} className="flex justify-between items-center border-b border-gray-600 py-2 px-4">
                                    <p>{trackData.songName || "Untitled Track"} by {trackData.songArtist || "Unknown Artist"}</p>
                                    <section className="flex gap-4 text-2xl">
                                        <FaPlayCircle 
                                            className="cursor-pointer hover:text-cyan-600" 
                                            onClick={() => setSongToPlay(trackData)} 
                                        />
                                        <IoMdCloseCircle 
                                            className="cursor-pointer hover:text-red-500"
                                            onClick={() => deleteSong(item?.song_id, trackData.songName)} 
                                        />
                                    </section>
                                </div>
                            );
                        })}

                        <AddPlaylist user_id={user.user_id} playlist={playlists} />
                    </div>
                </>
            ) : (
                <Login />
            )}

            {message && <p className="mt-4 text-green-500 text-center font-semibold">{message}</p>}
        </div>
    );
}

export default Playlists