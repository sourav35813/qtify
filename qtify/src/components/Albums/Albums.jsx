import React from "react";
import "./Albums.module.css";
import TopAlbums from "./TopAlbums/TopAlbums";
import NewAlbums from "./NewAlbums/NewAlbums";
import FilteredSongs from "./FilteredSongs/FilteredSongs";

const Albums = () => {
  return (
    <div className="albums">
      <div className="gap">
        <TopAlbums />
      </div>
      <div className="gap">
        <NewAlbums />
      </div>
      <div className="gap">
        <FilteredSongs />
      </div>
    </div>
  );
};

export default Albums;
