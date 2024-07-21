import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();
  console.log(authLink);

  return (
    <div className="frontpage-container">
      <h1 className="frontpage-login"><a href={authLink} className="frontpage-login">login</a></h1>
    </div>
  );
}
