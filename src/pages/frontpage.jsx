import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();

  return (
    <div className="frontpage-container">
      <div className="frontpage-content">
        <h1 className="frontpage-login">
          <a href={authLink} className="frontpage-login">log in</a>
        </h1>
        <p>and click on one of your playlists to add all of its songs to your saved songs</p>
      </div>
      <p className="frontpage-footer">Batch music save utility by Ramit Brata Biswas (https://github.com/ramitbratabiswas), 2024</p>
    </div>
  );
}
