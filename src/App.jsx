import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const handleClick = () => {
    setShowMessage(true);
    setShowConfetti(true);
  };

  const balloonItems = ["🎈"];

  return (
    <div className="container">
      <h1 className="title">🎉 HAPPY BIRTHDAY 🎉</h1>

      <button className="btn" onClick={handleClick}>
        Click for Surprise 🎁
      </button>

      {showMessage && (
        <div className="card">
          <p>
            Wishing you a life filled with happiness, laughter, and success! 🌸✨ <br></br>
            May all your dreams come true 🚀
          </p>
        </div>
      )}

      {/* 🎈 Balloons */}
        <div className="balloons">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>
              {balloonItems[Math.floor(Math.random() * balloonItems.length)]}
            </span>
          ))}
        </div>

      {/* 🎉 REAL CONFETTI */}
      {showConfetti && <Confetti 
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={300}
        gravity={0.25}
        wind={0.02}/>}
      </div>
  );
}

export default App;
