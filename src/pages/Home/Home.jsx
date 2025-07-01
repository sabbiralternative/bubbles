import { useEffect, useState } from "react";
import BetSlip from "./BetSlip";
import GameBox from "./GameBox";
import GameFooter from "./GameFooter";
import GameRight from "./GameRight";
import Header from "./Header";
import WinModal from "./WinModal";
const itemSizeOBJ = {
  1: 31.2,
  2: 31.2,
  3: 31.2,
  4: 31.2,
  5: 31.2,
  6: 26,
  7: 22.285714285714285,
  8: 19.6,
  9: 17.333333333333332,
  10: 15.6,
};
const allowedDefaults = ["_default0", "_default2", "_default3", "_default4"];
const Home = () => {
  const [showWinModal, setShowWinModal] = useState(false);
  const [boxSize, setBoxSize] = useState("");
  const [rows, setRows] = useState(5);
  const [column, setColumn] = useState(5);
  const [betAmount, setBetAmount] = useState(100);
  const [isDesktop, setIsDesktop] = useState(false);

  const initialBoxes = Array.from({ length: rows * column }).map((_, i) => {
    const randomIndex = Math.floor(Math.random() * allowedDefaults.length);
    return {
      id: i + 1,
      name: allowedDefaults[randomIndex],
      active: false,
      star: i === 0 ? true : false,
      noStar: false,
      roundEnd: false,
      showBubble: true,
    };
  });

  const [boxes, setBoxes] = useState(initialBoxes);

  useEffect(() => {
    setBoxes(initialBoxes);
  }, [rows, column]);

  useEffect(() => {
    if (rows > column) {
      setBoxSize(itemSizeOBJ[rows]);
    }
    if (column > rows) {
      setBoxSize(itemSizeOBJ[column]);
    }
    if (column === rows) {
      setBoxSize(itemSizeOBJ[column]);
    }
  }, [rows, column]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isAtLeastOneBoxActive = boxes.some((box) => box.active);

  return (
    <div
      style={{
        width: isDesktop ? "420px" : "100%",
        margin: "0 auto",
        overflow: "hidden",
      }}
      id="app"
    >
      {showWinModal && <WinModal betAmount={betAmount} />}
      <Header isDesktop={isDesktop} />

      <div className="tmp">
        <div
          className="tmp__inner"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <div className="tmp__main" style={{ marginRight: "0px" }}>
            <div className="main">
              <div className="payout _show">
                <div className="payout__description">
                  Find the winning bubble ⭐!
                </div>
              </div>
              <div className="game">
                <div className="game__left">
                  <div
                    onClick={() => setBoxes(initialBoxes)}
                    className={`game__clear ${
                      isAtLeastOneBoxActive ? "" : "_disabled"
                    }`}
                  >
                    <i className="iconFont iconFont-delete" />
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                  [data-bubbles-game-index] > * {\n                    pointer-events: none;\n                  }\n                ",
                  }}
                />
                <div
                  className="game__center"
                  style={{
                    "--item-size": `${isDesktop ? boxSize + 16 : boxSize}px`,
                    "--columns": column,
                    "--rows": rows,
                  }}
                >
                  <GameBox setBoxes={setBoxes} boxes={boxes} />
                </div>
                <GameRight rows={rows} setRows={setRows} />
                <GameFooter column={column} setColumn={setColumn} />
              </div>
            </div>
          </div>
          <div className="tmp__control">
            <div className="random">
              <div className="random__title _pointer">
                Choose randomly
                <i className="iconFont iconFont-up" />
              </div>
            </div>
            <BetSlip
              betAmount={betAmount}
              setBetAmount={setBetAmount}
              setShowWinModal={setShowWinModal}
              initialBoxes={initialBoxes}
              setBoxes={setBoxes}
              boxes={boxes}
              isAtLeastOneBoxActive={isAtLeastOneBoxActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
