import React, { useState, useEffect } from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

import data from "./data";

import "./styles/app.scss";

const App = () => {
  // state for song and current song
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // state for switching true/false for active
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library
        setSongs={setSongs}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
