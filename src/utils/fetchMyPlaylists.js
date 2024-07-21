import { useState, useEffect } from "react";

export const useFetchMyPlaylists = () => {

  const [userPlaylists, setUserPlaylists] = useState([]);
  const [owners, setOwners] = useState([]);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {

    const fetchMyPlaylists = async () => {

      if (!accessToken) return null;

      let offset = 0;
      let playlists = [];
      let current = [];
      let jsonified = null;
      let ownersSet = new Set();

      do {
        const res = await fetch(`https://api.spotify.com/v1/me/playlists?offset=${offset}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        offset += 50;

        jsonified = await res.json();
        current = jsonified.items.map((item) => {
          ownersSet.add(item.owner.display_name);
          return {
            name: item.name,
            id: item.id,
            owner: item.owner.display_name
          }
        })
        playlists = [...playlists, ...current];
      } while (jsonified.items.length === 50)

      setUserPlaylists(() => playlists);
      setOwners(() => [...ownersSet]);
    }
    fetchMyPlaylists();
  }, [accessToken]);

  return { playlists: userPlaylists, owners: owners };
}