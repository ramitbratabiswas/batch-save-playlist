import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists";
import { useSaveMusic } from "../utils/saveMusic";

export default function Utility() {

  const { playlists, owners } = useFetchMyPlaylists();

  return (
    <div className="utility-container">
      <ul>
      {playlists.map((item, index) => <li key={index+1}>{index+1}. {item.name} - {item.owner}</li>)} 
      </ul>
      <br/>
      <ul>
      {owners.map((item, index) => <li key={index+1}>{index+1}. {item}</li>)}
      </ul>
    </div>
  );
}
