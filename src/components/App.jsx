import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [qoute, setQoute] = useState({
    advice:
      "The future belongs to those who believe in the beauty of their dreams.",
    id: 1,
  });
  const [loading, setLoading] = useState(false);

  const getQoutes = async function () {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.adviceslip.com/advice/${randomId()}`
      );
      const { slip } = await res.json();
      setQoute(slip);
      console.log(slip);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  function randomId() {
    return Math.floor(Math.random() * 200);
  }

  function handleClick() {
    getQoutes();
  }

  function handlePostX() {
    window.open(`https://x.com/intent/post?text=${qoute.advice} - ${qoute.id}`);
  }

  useEffect(function () {}, []);

  return (
    <div className="container">
      <div className="qoute">{qoute.advice}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          {loading ? <Loading /> : <div className="author">{qoute.id}</div>}
          <div className="icons">
            <img
              onClick={() => handleClick()}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              src="./reload-50.png"
              alt=""
            />
            <img
              onClick={() => handlePostX()}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              src="./X_dark.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
