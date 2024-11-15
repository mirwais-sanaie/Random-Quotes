import { useState } from "react";
import "./App.css";

export default function App() {
  const [qoute, setQoute] = useState({
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Unknown",
  });

  return (
    <div className="container">
      <div className="qoute">{qoute.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{qoute.author}</div>
          <div className="icons">
            <img
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              src="./X_dark.svg"
              alt=""
            />
            <img
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              src="./reload-50.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
