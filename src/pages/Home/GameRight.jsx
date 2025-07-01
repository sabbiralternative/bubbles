import { useState } from "react";
const STEP_VALUE = 11.1111;

const GameRight = ({ rows, setRows }) => {
  const [rangeTop, setRangeTop] = useState(55.5556);
  const [rangeBottom, setRangeBottom] = useState(44.4444);

  const handleGameRangeChange = (e) => {
    const inputRange = Number(e.target.value);
    const diff = Math.abs(inputRange - rows);

    if (inputRange > rows) {
      setRangeBottom((prev) => prev + STEP_VALUE * diff);
      setRangeTop((prev) => prev - STEP_VALUE * diff);
    } else if (inputRange < rows) {
      setRangeBottom((prev) => prev - STEP_VALUE * diff);
      setRangeTop((prev) => prev + STEP_VALUE * diff);
    }

    setRows(inputRange);
  };

  const handleChange = (type) => {
    if (type === "plus") {
      if (rows === 10) {
        return;
      } else {
        setRows((prev) => prev + 1);
        setRangeBottom((prev) => prev + 11.1111);
        setRangeTop((prev) => prev - 11.1111);
      }
    }
    if (type === "minus") {
      if (rows === 1) {
        return;
      } else {
        setRows((prev) => prev - 1);
        setRangeBottom((prev) => prev - 11.1111);
        setRangeTop((prev) => prev + 11.1111);
      }
    }
  };
  return (
    <div className="game__right">
      <div className="game-range-v">
        <div
          className="game-range-v__plus"
          onClick={() => handleChange("plus")}
        >
          <i className="iconFont iconFont-plus" />
        </div>
        <div
          id="e879fee1-d980-408b-ac32-7dfde569d849"
          className="game-range-v__range"
          style={{ position: "relative", display: "flex" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                        #acea4e4b4-55bd-4f44-b841-8b6bcd857070::-webkit-slider-thumb {\n                          -webkit-appearance: none;\n                          height: 1000px;\n                          width: 14px;\n                          background: red;\n                        }\n                        #acea4e4b4-55bd-4f44-b841-8b6bcd857070::-moz-range-thumb {\n                          height: 1000px;\n                          width: 14px;\n                          background: red;\n                        }\n                        #acea4e4b4-55bd-4f44-b841-8b6bcd857070::-ms-thumb {\n                          height: 1000px;\n                          width: 14px;\n                          background: red;\n                        }\n                        #acea4e4b4-55bd-4f44-b841-8b6bcd857070 {\n                          background: yellow;\n                        }",
            }}
          />
          <input
            onChange={handleGameRangeChange}
            min={1}
            max={10}
            step={1}
            value={rows}
            type="range"
            id="acea4e4b4-55bd-4f44-b841-8b6bcd857070"
            style={{
              appearance: "none",
              position: "absolute",
              width: "114px",
              height: "18px",
              opacity: 0,
              cursor: "pointer",
              overflow: "hidden",
              transform: "rotate(-90deg)",
            }}
          />
          <div
            className="game-range-v__top"
            style={{ pointerEvents: "none", height: `${rangeTop}%` }}
          />
          <div
            className="game-range-v__center"
            style={{ pointerEvents: "none" }}
          />
          <div
            className="game-range-v__bottom"
            style={{ pointerEvents: "none", height: `${rangeBottom}%` }}
          />
        </div>
        <div
          onClick={() => handleChange("minus")}
          className="game-range-v__minus"
        >
          <i className="iconFont iconFont-minus" />
        </div>
      </div>
    </div>
  );
};

export default GameRight;
