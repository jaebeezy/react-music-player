import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1 onClick={() => window.location.reload()}>🎵</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>Library</button>
    </nav>
  );
};

export default Nav;
