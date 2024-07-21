import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/frontpage";
import SpotifyCallback from "./components/spotifyCallback";
import Utility from "./pages/utility";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/callback/*" element={<SpotifyCallback />} />
        <Route path="/utility" element={<Utility />} />
      </Routes>
    </div>
  )
}

export default App
