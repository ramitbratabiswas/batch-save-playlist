import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists";

export default function Utility() {

  const data = useFetchMyPlaylists();

  return (
    <div className="utility-container">
      <ul>
      {data.playlists.map((item, index) => <li key={index+1}>{index+1}. {item.name} - {item.owner}</li>)} 
      </ul>
      <br/>
      <ul>
      {data.owners.map((item, index) => <li key={index+1}>{index+1}. {item}</li>)}
      </ul>
    </div>
  );
}
