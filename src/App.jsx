import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist.js";
import SongPlaylist from "./components/SongPlaylist.js";
import Test from "./components/Test";
import { useDispatch } from "react-redux";
import { reset } from "./store/actions";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset())
    
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger btn btn-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
      {/* <Test /> */}
    </div>
  );
}
