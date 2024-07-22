import { useEffect } from "react";

export const useBatchSave = (id = "") => {

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const batchSave = async (id) => {
      if (id === "") return;
      if (!token) return;

      console.log("batchSave running: " + id);

      let data = [];
      let offset = 0;

      do {

        const res = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}&limit=50`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        data = await res.json();
        const idList = data.items.map((item) => item.track.id);

        const idListString = idList.join(",");

        await fetch(`https://api.spotify.com/v1/me/tracks?ids=${idListString}`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        offset += 50;

      } while (data.items.length === 50);

    }

    batchSave(id);
  }, [token, id]);

}
