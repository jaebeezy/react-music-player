import React, { useState } from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

import data from "./data";

import "./styles/app.scss";

const App = () => {
  // state for song and current song
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // state for switching true/false for active
  const [isPlaying, setIsPlaying] = useState(false);
  // state for library button activity
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
