import React, { useState } from "react";
import "./styles.css";
import KeypadComponent from "./KeypadComponent.js";
import ResultComponent from "./ResultComponent.js";

export default function App() {
  const [result, setResult] = useState("");

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

      var checkResult = "";
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
        addHistory(result, eval(checkResult));
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
    const button2 = document.createElement("button");
    const equText = document.createTextNode(equ);
    const ansText = document.createTextNode(ans);
    const img = document.createElement("img");
    const his = document.getElementById("his");

    button1.setAttribute("class", "historyElement");
    button1.setAttribute("id", " ");
    button2.setAttribute("class", "historyElement");
    button2.setAttribute("id", " ");

    /*img.setAttribute("class", "trashIcon");
    img.setAttribute(
      "src",
      "https://img.icons8.com/ultraviolet/40/000000/xbox-x.png"
    );*/

    button1.appendChild(equText);
    button2.appendChild(ansText);
    //button1.appendChild(img);
    div.appendChild(button1);
    div.appendChild(button2);
    his.appendChild(div);

    button1.addEventListener("click", () => {
      try {
        button1.setAttribute("id", "btnClicked");
      } catch (TypeError) {}
    });

    img.addEventListener("click", () => {
      div.remove();
    });
  }

  return (
    <div>
      <div className="calculator-body">
        <ResultComponent className="result" result={result} />
        <KeypadComponent onClick={onClick} />
      </div>

      <div>
        <fieldset className="calculator-history" id="his">
          <h2>History</h2>
        </fieldset>
      </div>
    </div>
  );
}
