import { useState } from "react";

const STEP_VALUE = 12.5;
const GameFooter = ({ column, setColumn }) => {
  const [rangeLeft, setRangeLeft] = useState(37.5);
  const [rangeRight, setRangeRight] = useState(62.5);

  const handleGameRangeChange = (e) => {
    const inputRange = Number(e.target.value);
    const diff = Math.abs(inputRange - column);

    if (inputRange > column) {
      setRangeRight((prev) => prev - STEP_VALUE * diff);
      setRangeLeft((prev) => prev + STEP_VALUE * diff);
    } else if (inputRange < column) {
      setRangeRight((prev) => prev + STEP_VALUE * diff);
      setRangeLeft((prev) => prev - STEP_VALUE * diff);
    }

    setColumn(inputRange);
  };

  const handleChange = (type) => {
    if (type === "plus") {
      if (column === 10) {
        return;
      } else {
        setColumn((prev) => prev + 1);
        setRangeRight((prev) => prev - 12.5);
        setRangeLeft((prev) => prev + 12.5);
      }
    }
    if (type === "minus") {
      if (column === 2) {
        return;
      } else {
        setColumn((prev) => prev - 1);
        setRangeRight((prev) => prev + 12.5);
        setRangeLeft((prev) => prev - 12.5);
      }
    }
  };
  return (
    <div className="game__footer">
      <div className="game-range">
        <div onClick={() => handleChange("minus")} className="game-range__plus">
          <i className="iconFont iconFont-minus" />
        </div>
        <div
          id="ed801a29-2410-479b-bfa2-30233f2037fc"
          className="game-range__range"
          style={{ position: "relative", display: "flex" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                        #a3f52d88a-510c-4042-b68b-f4b7f018e408::-webkit-slider-thumb {\n                          -webkit-appearance: none;\n                          height: 1000px;\n                          width: 16px;\n                          background: red;\n                        }\n                        #a3f52d88a-510c-4042-b68b-f4b7f018e408::-moz-range-thumb {\n                          height: 1000px;\n                          width: 16px;\n                          background: red;\n                        }\n                        #a3f52d88a-510c-4042-b68b-f4b7f018e408::-ms-thumb {\n                          height: 1000px;\n                          width: 16px;\n                          background: red;\n                        }\n                        #a3f52d88a-510c-4042-b68b-f4b7f018e408 {\n                          background: yellow;\n                        }",
            }}
          />
          <input
            onChange={handleGameRangeChange}
            min={2}
            max={10}
            step={1}
            type="range"
            id="a3f52d88a-510c-4042-b68b-f4b7f018e408"
            style={{
              appearance: "none",
              position: "absolute",
              width: "122px",
              height: "16px",
              opacity: 0,
              cursor: "pointer",
              overflow: "hidden",
            }}
            value={column}
          />
          <div
            className="game-range__left"
            style={{ pointerEvents: "none", width: `${rangeLeft}%` }}
          />
          <div
            className="game-range__center"
            style={{ pointerEvents: "none" }}
          />
          <div
            className="game-range__right"
            style={{ pointerEvents: "none", width: `${rangeRight}%` }}
          />
        </div>
        <div onClick={() => handleChange("plus")} className="game-range__minus">
          <i className="iconFont iconFont-plus" />
        </div>
      </div>
    </div>
  );
};

export default GameFooter;
