import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [result, setResult] = useState('');

  const handleButtonClick = (label) => {
    setResult(prevResult => prevResult + label);
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="renderCalculator">
      <div className="display">
        <p>{result}</p>
      </div>
      <div className="numbers">
        <Button label="1" onClick={() => handleButtonClick("1")} className="button-numbers" />
        <Button label="2" onClick={() => handleButtonClick("2")} className="button-numbers" />
        <Button label="3" onClick={() => handleButtonClick("3")} className="button-numbers" />
        <Button label="+" onClick={() => handleButtonClick("+")} className="button-numbers-signs" />
        <Button label="4" onClick={() => handleButtonClick("4")} className="button-numbers" />
        <Button label="5" onClick={() => handleButtonClick("5")} className="button-numbers" />
        <Button label="6" onClick={() => handleButtonClick("6")} className="button-numbers" />
        <Button label="-" onClick={() => handleButtonClick("-")} className="button-numbers-signs" />
        <Button label="7" onClick={() => handleButtonClick("7")} className="button-numbers" />
        <Button label="8" onClick={() => handleButtonClick("8")} className="button-numbers" />
        <Button label="9" onClick={() => handleButtonClick("9")} className="button-numbers" />
        <Button label="*" onClick={() => handleButtonClick("*")} className="button-numbers-signs" />
        <Button label="=" onClick={calculateResult} className="button-numbers-signs" />
        <Button label="0" onClick={() => handleButtonClick("0")} className="button-numbers" />
        <Button label="." onClick={() => handleButtonClick(".")} className="button-numbers-signs" />
        <Button label="/" onClick={() => handleButtonClick("/")} className="button-numbers-signs" />
      </div>
      <div>
        <Button label="CLEAR" onClick={clearResult} className="button-clear" />
      </div>
    </div>
  );
}

export default App;
