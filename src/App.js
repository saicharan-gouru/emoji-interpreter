import { useState } from "react";
import "./styles.css";
var emojiDict = {
  "😊": "SMILING",
  "😳": "DISBELIEF",
  "😔": "SAD",
  "🥡": "TAKEOUT BOX",
  "❤️": "LOVE",
  "😑": "ANNOYANCE",
  "😀": "GRINNING FACE"
};

var emojisList = ["😊", "😳", "😔", "❤️", "😑", "😀"];

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    setMeaning(emojiDict[inputEmoji]);
    if (emojiDict[inputEmoji] === undefined) {
      setMeaning("Sorry..We don't have this in out database..😔");
    }
    if (inputEmoji === "") {
      setMeaning("");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="Put Your Emoji Here" onChange={emojiInputHandler} />
      <div class="meaning">
        <h2>{meaning}</h2>
      </div>
      <h2>Emojis We Know</h2>
      {emojisList.map((emoji) => {
        return (
          <span
            class="emojisList"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
