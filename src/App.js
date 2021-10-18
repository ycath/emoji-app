import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Slide.scss";
import { generateEmojipasta } from "./emojipasta";
const getEmoji = require("get-random-emoji");

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [gentext, setGentext] = useState("");
  const [emojis, setEmojis] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let newtext = generateEmojipasta(text);
    // alert(`new  text is ${newtext}`);
    setGentext(newtext);
  };
  return (
    <div className="App">
      <script src="./emoji-mappings.js"></script>
      <header className="App-header">
        <p>emoji</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>fun</p>
      </header>
      <body>
        <h1>Build an emoji string</h1>
        <div display="flex" flex-direction="row">
          <button
            class="icon-slide-left"
            background-color="blue"
            onClick={() => setEmojis(emojis.concat(getEmoji()))}
          >
            <span>Add emoji</span>
          </button>
          <button
            class="icon-slide-right"
            onClick={() => setEmojis(emojis.slice(0, -1))}
          >
            <span>Remove emoji</span>
          </button>
        </div>
        <button
          class="button-rotate-grow"
          onClick={() => setEmojis(buildEmojis(emojis.length))}
        >
          Random emoji string of length {emojis.length}
        </button>
        <p> {emojis}</p>
        {/* <EmojiBuilder count={count} /> */}

        <h1>Build an emoji pasta</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            width="300px"
            height="150px"
            type="text"
            value={text.toString()}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Generate" />
        </form>
        <p> {gentext}</p>
      </body>
    </div>
  );
}

function buildEmojis(count) {
  let myemojis = [];
  for (let i = 0; i < count; i++) {
    let em = getEmoji();
    myemojis.push(em);
  }

  return myemojis;
}

export default App;
