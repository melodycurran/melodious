import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddSongBtn from '../components/AddSongBtn';

function Song() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    // Fetch the song details using the ID from the URL
    const fetchSong = async () => {
      const response = await fetch(`http://localhost:3001/api/jamendo/${id}`);
      const data = await response.json();
      setSong(data);
    };

    fetchSong();
  }, [id]);

  if (!song) {
    return <div>Loading...</div>
  }

  return (
	  <div className="w-full text-center text-white p-4 lg:flex   lg:flex-row-reverse lg:justify-around lg:items-around lg:w-[950px] mt-10 bg-white/30 rounded">
		  <section className="flex flex-col items-center justify-around">
			  <section className="text-white font-bold bg-black/30 p-4 rounded">
				<h3 className="font-bold text-3xl">{song.name}</h3>
				<h3  className="mt-4">by {song.artist_name}</h3>
				<p>Date released: {song.releasedate}</p>	
				  <p>Album: {song.album_name}</p>
				</section>

			  <audio src={song.audio} controls/>
		</section>

		  <section>
			<img src={song.album_image} alt={song.album_name} className="w-64 h-64 object-cover mb-5 mx-auto mt-5" />
			
			
			{/* autoPlay controls */}
			<AddSongBtn song={song} />
		</section>
		  
	</div>
  );
}

export default Song;