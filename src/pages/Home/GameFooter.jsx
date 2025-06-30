const GameFooter = () => {
  return (
    <div className="game__footer">
      <div className="game-range">
        <div className="game-range__plus">
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
          />
          <div
            className="game-range__left"
            style={{ pointerEvents: "none", width: "37.5%" }}
          />
          <div
            className="game-range__center"
            style={{ pointerEvents: "none" }}
          />
          <div
            className="game-range__right"
            style={{ pointerEvents: "none", width: "62.5%" }}
          />
        </div>
        <div className="game-range__minus">
          <i className="iconFont iconFont-plus" />
        </div>
      </div>
    </div>
  );
};

export default GameFooter;
