import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists";

export default function Utility() {

  const playlists = useFetchMyPlaylists();

  return (
    <div className="utility-container">
      <ul>
      {playlists.map((item, index) => <li key={index}>{index+1}. {item.name}</li>)} 
      </ul>
    </div>
  );
}
