import React, { useState, useEffect } from "react";

import Song from "./components/Song";
import Player from "./components/Player";

import data from "./data";

import "./styles/app.scss";

const App = () => {
  // state for song and current song
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
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
    </div>
  );
};

export default App;
