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
  };

  const handleClickOwner = (owner) => {
    setOwnerFilter(owner);
  };

  return (
    <div className="utility-container">
      <p className="owners-header">filter by owner: {ownerFilter}</p>
      <ul className="owners">
        {owners.map((item, index) => (
          <li className="owner-name" key={index + 1}>
            {index + 1}. <span onClick={() => handleClickOwner(item)}>{item}</span>
          </li>
        ))}
      </ul>
      <br />
      <h1 className="playlists-header">your playlists:</h1>
      <ul className="playlists">
        {playlists
          .filter((item) => ownerFilter === "all" || item.owner === ownerFilter)
          .map((item, index) => (
            <li className="playlist-name" key={index + 1}>
              {index + 1}. <span onClick={() => handleClickPlaylist(item.id)}>{item.name} {ownerFilter === "all" ? ` - ${item.owner}` : ""}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
