import React, { useState } from "react";
import { Link } from "react-router-dom";
import { seriesData } from "../../data/comics.js";
import "./Explore.css";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("New Comics");

  const allComics = seriesData.flatMap((series) =>
    series.issues.map((issue) => ({
      seriesSlug: series.slug,
      seriesTitle: series.title,
      characters: series.characters || [],
      ...issue,
    }))
  );

  const latestComics = seriesData.map((series) => {
    const latestIssue = series.issues[series.issues.length - 1];
    return {
      seriesSlug: series.slug,
      seriesTitle: series.title,
      characters: series.characters || [],
      ...latestIssue,
    };
  });

  const characters = [...new Set(allComics.flatMap((comic) => comic.characters || []))];
  const seriesTitles = seriesData.map((series) => series.title);

  const filters = ["New Comics", ...characters, ...seriesTitles];

  let comicsToDisplay = [];
  if (selectedFilter === "New Comics" && searchTerm.trim() === "") {
    comicsToDisplay = latestComics;
  } else {
    comicsToDisplay = allComics.filter((comic) => {
      const matchesSearch =
        comic.seriesTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (comic.description &&
          comic.description.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilter =
        selectedFilter === "New Comics" ||
        comic.characters.includes(selectedFilter) ||
        comic.seriesTitle === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }

  return (
    <div className="explore-container">
      <h2 className="explore-heading">Explore Comics</h2>

      {/* Search bar */}
      <div className="explore-search">
        <input
          type="text"
          placeholder="Search by title, description, or series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter pills */}
      <div className="character-scroll">
        {filters.map((item) => {
          let typeClass = "";
          if (item === "New Comics") typeClass = "all-pill";
          else if (characters.includes(item)) typeClass = "character-pill";
          else typeClass = "series-pill";

          return (
            <div
              key={item}
              className={`${typeClass} ${selectedFilter === item ? "selected" : ""}`}
              onClick={() => setSelectedFilter(item)}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Comics Grid */}
      <div className="explore-grid">
        {comicsToDisplay.length > 0 ? (
          comicsToDisplay.map((comic) => (
            <Link
              key={`${comic.seriesSlug}-${comic.number}`}
              to={`/comic/${comic.seriesSlug}/${comic.number}`}
              className="comic-card"
            >
              <div className="card-image">
                <img
                  src={comic.cover}
                  alt={`${comic.seriesTitle} #${comic.number}`}
                />
              </div>
              <div className="card-content">
                <h3>
                  {comic.seriesTitle} #{comic.number}
                </h3>
                <p>{comic.description?.slice(0, 100)}...</p>
                {comic.characters && (
                  <div className="card-characters">
                    {comic.characters.map((c) => (
                      <span key={c} className="character-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">No comics found.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
