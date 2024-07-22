import { useState } from "react";

import { useBatchSave } from "../utils/batchSave";
import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists";

export default function Utility() {

  const { playlists, owners } = useFetchMyPlaylists();
  const [playlistToSave, setPlaylistToSave] = useState("");

  useBatchSave(playlistToSave);

  const savePlaylist = (id) => {
    console.log("id in savePlaylist: " + id);
    setPlaylistToSave(id);
  }

  return (
    <div className="utility-container">
      <ul>
      {playlists.map((item, index) => <li onClick={() => savePlaylist(item.id)} key={index+1}>{index+1}. {item.name} {item.id} - {item.owner}</li>)} 
      </ul>
      <br/>
      <ul>
      {owners.map((item, index) => <li key={index+1}>{index+1}. {item}</li>)}
      </ul>
    </div>
  );
}
