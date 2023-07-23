import { createRandomSong } from "../data";
import { useDispatch } from "react-redux";
import  { addSong , removeSong } from "../store/slices/SongsSlices";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


function SongPlaylist() {
  const dispatch = useDispatch();
 
  const songPlaylist = useSelector((state) => {
    return state.songs
  })

  const handleSongAdd = (song) => {
    const action = addSong(song);
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    const action = removeSong(song);
    dispatch(action);
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          className="btn bnn-danger"
          onClick={() => handleSongRemove(song)}
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link btn btn-primary btn-md"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
