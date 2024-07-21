import { useEffect } from "react";

export const useSaveMusic = (idList) => {

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {

    const saveMusic = async (idList) => {

      if (!accessToken) return null;

      const idListString = idList.join(",");
      console.log(idListString);

      await fetch(`https://api.spotify.com/v1/me/tracks?ids=${idListString}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      });
    }
    saveMusic(idList);
  }, [accessToken, idList]);

}