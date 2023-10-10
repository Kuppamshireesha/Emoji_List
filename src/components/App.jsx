import React from "react";
import CreateEmoji from "./CreateEmoji";
import emojipedia from "../emojipedia";

function CreateCard(emojiterm) {
  return (
    <CreateEmoji
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      ename={emojiterm.name}
      edescription={emojiterm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
