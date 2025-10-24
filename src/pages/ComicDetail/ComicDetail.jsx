import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { seriesData } from "../../data/comics";
import "./ComicDetail.css";

const ComicDetail = () => {
  const { seriesSlug, issueNumber } = useParams();
  const navigate = useNavigate();

  const series = seriesData.find((s) => s.slug === seriesSlug);
  if (!series) return <p style={{ textAlign: "center" }}>Series not found!</p>;

  const issueIndex = series.issues.findIndex(
    (issue) => issue.number === parseInt(issueNumber)
  );
  if (issueIndex === -1)
    return <p style={{ textAlign: "center" }}>Issue not found!</p>;

  const issue = series.issues[issueIndex];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [issueNumber]);

  const handlePrev = () => {
    if (issueIndex > 0) {
      navigate(`/comic/${series.slug}/${series.issues[issueIndex - 1].number}`);
    }
  };

  const handleNext = () => {
    if (issueIndex < series.issues.length - 1) {
      navigate(`/comic/${series.slug}/${series.issues[issueIndex + 1].number}`);
    }
  };

  return (
    <div
      className="comic-detail-page"
      style={{ "--bg-url": `url(${issue.cover})` }}
    >
      <div className="content-wrapper">
        {/* Navigation */}
        <div className="comic-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ‹ BACK TO SERIES
          </button>
          <div className="prev-next">
            <button className="nav-btn" onClick={handlePrev} disabled={issueIndex === 0}>
              ‹ PREV
            </button>
            <button
              className="nav-btn"
              onClick={handleNext}
              disabled={issueIndex === series.issues.length - 1}
            >
              NEXT ›
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="comic-detail-container">
          <div className="comic-cover">
            <img src={issue.cover} alt={`${series.title} #${issue.number}`} />
          </div>

          <div className="comic-info">
            <h1 className="comic-title">
              {series.title} #{issue.number}
            </h1>

            <div className="meta-grid">
              <div className="meta-col">
                <p className="meta-item">
                  <span className="meta-label">Published</span>
                  <span className="meta-value">{issue.published}</span>
                </p>
                <p className="meta-item">
                  <span className="meta-label">Writer</span>
                  <span className="meta-value">{issue.writer}</span>
                </p>
              </div>

              <div className="meta-col right">
                <p className="meta-item">
                  <span className="meta-label">Penciller</span>
                  <span className="meta-value">{issue.penciller}</span>
                </p>
                {issue.coverArtist && (
                  <p className="meta-item">
                    <span className="meta-label">Cover Artist</span>
                    <span className="meta-value">{issue.coverArtist}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="comic-description">{issue.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDetail;
