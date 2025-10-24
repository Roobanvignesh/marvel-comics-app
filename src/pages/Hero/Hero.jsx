import React, { useState } from 'react';
import heroImg from '../../assets/hero.png';
import './Hero.css';

import schoolImg from '../../assets/miles_school.webp';
import spiderBiteImg from '../../assets/spider-bite.webp';
import gwenImg from '../../assets/gwen.webp';
import multiverseImg from '../../assets/multiverse.jpg';
import villainImg from '../../assets/villan.jpg';
import milesHero from '../../assets/miles-hero.jpg';
import marvelBG from '../../assets/marvel-intro.gif';

const comicPanels = [
  {
    title: "Miles Morales: Brooklyn Teen",
    text: "Miles Morales is a teenager trying to balance school, family, and his passion for art and music. Little does he know, his life is about to change forever when he inherits the Spider-Man mantle.",
    img: schoolImg,
  },
  {
    title: "Gaining Powers",
    text: "Miles is bitten by a genetically-altered spider, granting him abilities similar to Spider-Man: enhanced agility, strength, spider-sense, and camouflage. He struggles to control them at first.",
    img: spiderBiteImg,
  },
  {
    title: "Meeting Gwen Stacy",
    text: "Miles encounters Gwen Stacy, the Spider-Woman of another universe. She teaches him teamwork, strategy, and the challenges of being a hero in the multiverse.",
    img: gwenImg,
  },
  {
    title: "Crossing the Multiverse",
    text: "Miles discovers that the multiverse is at stake. He must navigate alternate dimensions, meet different Spider-People, and face complex villains threatening all realities.",
    img: multiverseImg,
  },
  {
    title: "The Threat of Kingpin",
    text: "The Kingpin emerges as a powerful antagonist, wielding advanced technology that can disrupt the multiverse. Miles must rise to the occasion and embrace his role as Spider-Man.",
    img: villainImg,
  },
  {
    title: "A Hero in His Own Right",
    text: "Through courage, ingenuity, and heart, Miles embraces his identity as Spider-Man. Swinging across Brooklyn and beyond, he continues his journey in the Spider-Verse, ready for new adventures.",
    img: milesHero,
  },
];

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const nextPanel = () => {
    setSlideDirection('right');
    setCurrentPanel((prev) => (prev + 1) % comicPanels.length);
  };

  const prevPanel = () => {
    setSlideDirection('left');
    setCurrentPanel((prev) =>
      prev === 0 ? comicPanels.length - 1 : prev - 1
    );
  };

  return (
    <div className='hero-section'>
      <div className="marvel-background"> <img src={marvelBG} alt="Marvel Background" /> </div>
      <div className="hero-content">
        <h6>New Arrival!!!</h6>
        <h2>Spider-Man: Across the Spider-Verse</h2>
        <p>
          Revisit the journey of Miles Morales before he swings into the Spider-Verse. 
          Discover his origin, powers, and the adventures that set the stage for the 
          multiverse showdown.
        </p>
        <button id='comic-btn' onClick={() => {
            setCurrentPanel(0);
            setShowPopup(true)
        }}>
          Revisit the Spider-Verse Recap
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Miles Morales swinging" />
      </div>

      {showPopup && (
        <div className="hero-popup">
          <div className="hero-popup-content">
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <div className={`comic-panel ${slideDirection}`}>
              <img
                src={comicPanels[currentPanel].img}
                alt={comicPanels[currentPanel].title}
                className="comic-panel-img"
              />
              <h3>{comicPanels[currentPanel].title}</h3>
              <p>{comicPanels[currentPanel].text}</p>
            </div>

            <div className="comic-controls">
              <button onClick={prevPanel}>← Prev</button>
              <span>{currentPanel + 1} / {comicPanels.length}</span>
              <button onClick={nextPanel}>Next →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
