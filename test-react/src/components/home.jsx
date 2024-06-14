import "../css/home.css";
import Answer from "./Answer";
import { useState } from "react";
import { Decimal } from "decimal.js";

function Home() {
  const [values, setValues] = useState({
    numberA: 0,
    numberB: 0,
  });

  const [results, setResult] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = () => {
    const inputDecimalValue = new Decimal(values.numberA);

    const toPlaceNumber = new Decimal(10).pow(parseInt(values.numberB, 10));
    const decimalResult = inputDecimalValue.times(toPlaceNumber);

    setResult(decimalResult.toFixed());
  };

  return (
    <div className="home_wrap">
      <div className="flex flex-col justify-center items-start">
        <h2 className="font-bold mb-4 text-2xl">Calculate Decimal</h2>
        <p className="font-semibold">Human-readable number X 1e Decimals=?</p>
        <div>
          <div className="flex flex-row gap-4 mt-4">
            <label>Human Readable number:</label>
            <input
              type="text"
              name="numberA"
              value={values.numberA}
              onChange={handleInput}
              id="numberA"
              className="bg-slate-200 outline-none py-[2px] px-[2px]"
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <label>Decimals</label>
            <input
              type="number"
              name="numberB"
              value={values.numberB}
              onChange={handleInput}
              id="numberB"
              className="bg-slate-200 outline-none py-[2px] px-[2px]"
            />
          </div>
        </div>
        <button
          onClick={handleCalculate}
          className="border border-gray-700 py-1 px-4 mt-4 rounded-sm bg-gray-400 text-white"
        >
          Calculate
        </button>
        <Answer results={results} />
      </div>
    </div>
  );
}

export default Home;