import React from "react";
import "./styles.css";

export default function KeypadComponent(props) {
  return (
    <div className="button">
      <button
        name="C"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        C
      </button>
      <button
        name="("
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        (
      </button>
      <button
        name=")"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        )
      </button>
      <button
        name="bS"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        ⌫
      </button>
      <br />
      <button
        name="1"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        1
      </button>
      <button
        name="2"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        2
      </button>
      <button
        name="3"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        3
      </button>
      <button
        name="+"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        +
      </button>
      <br />
      <button
        name="4"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        4
      </button>
      <button
        name="5"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        5
      </button>
      <button
        name="6"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        6
      </button>
      <button
        name="-"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        -
      </button>
      <br />
      <button
        name="7"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        7
      </button>
      <button
        name="8"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        8
      </button>
      <button
        name="9"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        9
      </button>
      <button
        name="*"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        *
      </button>
      <br />
      <button
        name="."
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        .
      </button>
      <button
        name="0"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        0
      </button>
      <button
        name="="
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        =
      </button>
      <button
        name="/"
        className="key"
        onClick={e => props.onClick(e.target.name)}
      >
        /
      </button>
    </div>
  );
}
