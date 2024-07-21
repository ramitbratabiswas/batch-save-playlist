import { useState, useEffect } from "react";

export const useFetchPlaylistTracks = (id) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      if (!token) return;

      const res = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=0&limit=100`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json();
        const tracks = data.items.map((item) => item.track.id);

        setPlaylistTracks(() => tracks);
    }

    fetchPlaylistTracks();
  }, [token, id]);

  return playlistTracks;
}
