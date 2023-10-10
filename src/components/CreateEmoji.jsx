import React from "react";

function CreateEmoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.ename}</span>
      </dt>
      <dd>{props.edescription}</dd>
    </div>
  );
}
export default CreateEmoji;
