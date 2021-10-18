import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';



function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [gentext, setGentext] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${text}`);
    setGentext(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* cat counter */}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase cat count: {count}
      </button>
      <CatCounter count={count} />
      {/* emotjipasta */}
      <form onSubmit={handleSubmit}>
      <label>
        Your text:
        <textarea
          width= "300px"
          height= "150px"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <p>generated text</p>
    <p> {gentext}</p>
    <EmojiPasta name = {gentext}/>
      </header>
    </div>
  );
}

function EmojiPasta({text}) {
  return (
    <>
      {text}
    </>
  );
}

function CatCounter({count}) {
  let cats = [];
  for (let i = 0; i < count; i++) {
    cats.push('🐱');
  }
  return (
    <>
      {cats}
    </>
  );
}

export default App;
