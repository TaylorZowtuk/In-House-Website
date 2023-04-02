import React, { useState, useEffect } from "react";
import "./CoinFlip.css";

type CoinFlipProps = {
  coinSides: string[];
};

const CoinFlip: React.FC<CoinFlipProps> = ({ coinSides }) => {
  const [flip, setFlip] = useState(false);
  const [flipComplete, setFlipComplete] = useState(false);
  const [coinSide, setCoinSide] = useState("");
  const [coinSideUp, setCoinSideUp] = useState("");

  useEffect(() => {
    if (flip) {
      setTimeout(() => setFlipComplete(true), 750);
    } else {
      setFlipComplete(false);
    }
  }, [flip]);

  const handleFlip = () => {
    const randomIndex = Math.floor(Math.random() * coinSides.length);
    setCoinSide(coinSides[randomIndex]);
    setCoinSideUp("");
    setFlip(true);
    setTimeout(() => {
      setCoinSideUp(coinSides[randomIndex]);
      setFlip(false);
    }, 1500);
  };

  return (
    <div className="coin-wrapper">
      <div className={`coin ${flip ? "flip" : ""}`}>
        <div className={`front ${flip && !flipComplete ? "hide-text" : ""}`}>{coinSideUp}</div>
        <div className="back"></div>
      </div>
      <div className="text-wrapper">
        <p>{coinSide ? `You got ${coinSide}!` : "Click the button to flip a coin."}</p>
      </div>
      <button onClick={handleFlip}>Flip Coin</button>
    </div>
  );
};

export default CoinFlip;
