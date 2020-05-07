import React, { useState } from "react";
import "./styles.css";
import KeypadComponent from "./KeypadComponent.js";
import ResultComponent from "./ResultComponent.js";
import HistoryComponent from "./HistoryComponent.js";

export default function App() {
  const [result, setResult] = useState("");
  var checkResult = "";
  function clr() {
    setResult("");
  }

  function calculate() {
    try {
      var check1 =
        result.includes("+") ||
        result.includes("-") ||
        result.includes("*") ||
        result.includes("/") ||
        result.includes("(") ||
        result.includes(")") ||
        result.includes(".");
      var check2 =
        result.includes("0") ||
        result.includes("1") ||
        result.includes("2") ||
        result.includes("3") ||
        result.includes("4") ||
        result.includes("5") ||
        result.includes("6") ||
        result.includes("7") ||
        result.includes("8") ||
        result.includes("9");
    } catch (TypeError) {}
    if (check1 && !check2) {
      setResult("error");
    }
    if (check1 && check2) {
      clr();
      if (result.includes("(")) {
        var parCheck = result.substring(
          result.indexOf("(") - 1,
          result.indexOf("(")
        );
      }

      if (result.includes("--")) {
        checkResult = result.replace("--", "+");
      } else {
        checkResult = result;
      }

      if (
        parCheck == 0 ||
        parCheck == 1 ||
        parCheck == 2 ||
        parCheck == 3 ||
        parCheck == 4 ||
        parCheck == 5 ||
        parCheck == 6 ||
        parCheck == 7 ||
        parCheck == 8 ||
        parCheck == 9
      ) {
        checkResult = result.replace("(", "*(");
      }
      try {
        if (result.includes("/0")) {
          throw "SyntaxError: CannotDivideBy0";
        }
        setResult(eval(checkResult));
        addHistory(checkResult, eval(checkResult));
      } catch (e) {
        if (e === "SyntaxError: CannotDivideBy0") {
          setResult("error");
        } else {
          setResult("error");
        }
        console.error(e);
      }
    }
  }

  function backSpace() {
    setResult(result.substring(0, result.length - 1));
  }

  function onClick(btn) {
    if (result === "error") {
      if (btn === "bS") {
        clr();
      } else if (btn === "C") {
        clr();
      } else if (btn === "=") {
      } else {
        setResult(btn);
      }
    } else {
      if (btn === "=") {
        calculate();
      } else if (btn === "C") {
        clr();
      } else if (btn === "bS") {
        backSpace();
      } else {
        setResult(result + btn);
      }
    }
  }

  function addHistory(equ, ans) {
    const div = document.createElement("div");

    const button1 = document.createElement("button");
    const equalSign = document.createElement("input");
    const button2 = document.createElement("button");

    const equText = document.createTextNode(equ);
    const ansText = document.createTextNode(ans);

    const img = document.createElement("img");
    const historyBox = document.getElementById("historyBox");

    button1.setAttribute("class", "historyElement");
    button1.setAttribute("id", " ");
    button1.setAttribute("value", equ);
    button2.setAttribute("class", "historyElement");
    button2.setAttribute("id", " ");
    button2.setAttribute("value", ans);
    equalSign.setAttribute("type", "text");
    equalSign.setAttribute("value", "=");
    equalSign.setAttribute("disabled", "true");
    equalSign.setAttribute("class", "equals");

    img.setAttribute("class", "trashIcon");
    img.setAttribute(
      "src",
      "https://img.icons8.com/ultraviolet/40/000000/xbox-x.png"
    );

    button1.appendChild(equText);
    button2.appendChild(ansText);
    div.appendChild(button1);
    div.appendChild(equalSign);
    div.appendChild(button2);
    div.appendChild(img);
    historyBox.appendChild(div);

    button1.addEventListener("click", () => {
      setResult(document.getElementById("result").value + equ);
    });
    button2.addEventListener("click", () => {
      setResult(document.getElementById("result").value + ans);
    });
    img.addEventListener("click", () => {
      div.remove();
    });
  }

  function deleteAllHistory() {
    var historyBox = document.getElementById("historyBox");
    while (historyBox.firstChild) {
      historyBox.removeChild(historyBox.firstChild);
    }
  }

  return (
    <div>
      <div className="calculator-body">
        <ResultComponent className="result" result={result} />
        <KeypadComponent onClick={onClick} />
      </div>

      <div className="calculator-history">
        <HistoryComponent deleteAllHistory={deleteAllHistory} />
      </div>
    </div>
  );
}
