import React from "react";
import "./styles.css";

export default function ResultComponent(props) {
  return (
    <div>
      <input
        className="result"
        type="text"
        id="result"
        value={props.result}
        disabled
      />
    </div>
  );
}
