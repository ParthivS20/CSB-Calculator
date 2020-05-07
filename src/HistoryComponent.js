import React from "react";
import "./styles.css";

export default function HistoryComponent(props) {
  return (
    <fieldset className="calculator-history">
      <label className="historyLabel">History</label>
      <input
        type="button"
        value="Clear History"
        className="clear"
        onClick={props.deleteAllHistory}
      />
      <div id="historyBox" />
    </fieldset>
  );
}
