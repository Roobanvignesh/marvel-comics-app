import React, { useState, useEffect } from "react";
import avengersImg from "../../assets/avengers-secret-wars.jpg";
import blackPantherImg from "../../assets/black-panther.jpg";
import ironManImg from "../../assets/ironman-legacy.jpg";
import doctorStrangeImg from "../../assets/doctor-strange.jpg";
import moonKnightImg from "../../assets/moonKnight.jpg";
import './NewRelease.css';

const releases = [
  { id: 1, title: "Iron Man: Legacy of Doom", image: ironManImg, date: "May 2026", description: "Tony Stark faces his darkest demons as old enemies rise again. A story of sacrifice, innovation, and the true price of being Iron Man." },
  { id: 2, title: "Avengers: Secret Wars", image: avengersImg, date: "Nov 2026", description: "The Avengers unite against a multiversal threat that could erase existence itself. Worlds collide in this epic Marvel crossover event." },
  { id: 3, title: "Doctor Strange: Nexus War", image: doctorStrangeImg, date: "", description: "Doctor Strange battles across dimensions as reality fractures. Magic, chaos, and cosmic forces collide in a war for the multiverse." },
  { id: 4, title: "Black Panther: Imperial War", image: blackPantherImg, date: "Aug 2025", description: "Wakanda is thrown into chaos as intergalactic war descends. T’Challa must defend his kingdom and uncover secrets that threaten his legacy." },
  { id: 5, title: "Moon Knight: Eclipse", image: moonKnightImg, date: "", description: "Marc Spector faces his greatest challenge under the eclipse. Darkness, vengeance, and ancient gods converge in a battle for his soul." },
];

const NewRelease = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [gap, setGap] = useState(140);
  const [cardSize, setCardSize] = useState({ w: 220, h: 330 });

useEffect(() => {
  const updateSizes = () => {
    const w = window.innerWidth;
    if (w <= 360) {
      setGap(70);
      setCardSize({ w: 90, h: 130 });
    } else if (w <= 480) {
      setGap(90);
      setCardSize({ w: 110, h: 160 });
    } else if (w <= 768) {
      setGap(120);
      setCardSize({ w: 150, h: 220 });
    } else if (w <= 1024) {
      setGap(140);
      setCardSize({ w: 180, h: 270 });
    } else {
      setGap(140);
      setCardSize({ w: 220, h: 330 });
    }
  };

  updateSizes();
  window.addEventListener("resize", updateSizes);
  return () => window.removeEventListener("resize", updateSizes);
}, []);


  const prev = () =>
    setCenterIndex((c) => (c - 1 + releases.length) % releases.length);
  const next = () => setCenterIndex((c) => (c + 1) % releases.length);

  return (
    <div className="new-release">
      <div className="release-content">
        <h1>NEW RELEASES</h1>
        <p>Discover the latest Marvel adventures—new heroes, epic battles, and fresh stories await!</p>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prev}>‹</button>

        <div className="carousel" style={{ height: `${Math.max(cardSize.h + 40, 220)}px` }}>
          {releases.map((item, index) => {
            let offset = index - centerIndex;

            if (offset < -Math.floor(releases.length / 2)) offset += releases.length;
            if (offset > Math.floor(releases.length / 2)) offset -= releases.length;

            const absOffset = Math.abs(offset);

            const scale = offset === 0 ? 1.12 : Math.max(0.9 - absOffset * 0.12, 0.55);
            const rotateY = offset * 18;
            const translateX = offset * gap;

            const w = cardSize.w;
            const h = cardSize.h;

            return (
              <div
                key={item.id}
                className="carousel-card"
                style={{
                  width: `${w}px`,
                  height: `${h}px`,
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex: (releases.length - absOffset) + 5,
                  opacity: absOffset > 3 ? 0 : 1,
                  transition: "transform 0.45s cubic-bezier(.2,.8,.2,1), opacity 0.4s ease",
                }}
              >
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={next}>›</button>
      </div>

      <div className="release-details">
        <h2>{releases[centerIndex].title}</h2>
        <p className="release-desc">{releases[centerIndex].description}</p>
        <p className="release-date">
          {releases[centerIndex].date ? `Releasing ${releases[centerIndex].date}` : "Coming Soon..."}
        </p>
      </div>
    </div>
  );
};

export default NewRelease;
