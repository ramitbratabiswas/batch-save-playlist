import { useState } from "react";

import { useBatchSave } from "../utils/batchSave";
import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists";

export default function Utility() {

  const { playlists, owners } = useFetchMyPlaylists();
  const [playlistToSave, setPlaylistToSave] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("all");

  useBatchSave(playlistToSave);

  const handleClickPlaylist = (id) => {
    setPlaylistToSave(id);
  }

  const handleClickOwner = (owner) => {
    setOwnerFilter(owner);
  }

  return (
    <div className="utility-container">
      <h1 className="utility-header">your playlists:</h1>
      <ul>
      {playlists.filter((item) => (ownerFilter === "all" || item.owner === ownerFilter)).map((item, index) => <li onClick={() => handleClickPlaylist(item.id)} key={index+1}>{index+1}. <span>{item.name} {(ownerFilter === "all") ? ` - ${item.owner}` : ""}</span></li>)} 
      </ul>
      <br/>
      <h1 className="utility-owners">filter by owner: {ownerFilter}</h1>
      <ul>
      {owners.map((item, index) => <li onClick={() => handleClickOwner(item)} key={index+1}>{index+1}. <span>{item}</span></li>)}
      </ul>
    </div>
  );
}
