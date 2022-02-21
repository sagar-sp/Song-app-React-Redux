import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "abcx", duration: "2:05" },
    { title: "xyz", duration: "4:05" },
    { title: "poq", duration: "6:05" },
    { title: "vdjh", duration: "4:05" },
    { title: "hghg", duration: "3:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
