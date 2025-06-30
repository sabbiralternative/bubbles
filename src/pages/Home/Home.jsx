import BetSlip from "./BetSlip";
import GameBox from "./GameBox";
import GameFooter from "./GameFooter";
import GameRight from "./GameRight";
import Header from "./Header";

const Home = () => {
  return (
    <div id="app">
      <Header />

      <div className="tmp">
        <div className="tmp__inner">
          <div className="tmp__main">
            <div className="main">
              <div className="payout _show">
                <div className="payout__description">
                  Find the winning bubble ⭐!
                </div>
              </div>
              <div className="game">
                <div className="game__left">
                  <div className="game__clear _disabled">
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
                  style={{ "-itemSize": "31.2px", "-columns": 5, "-rows": 5 }}
                >
                  <GameBox />
                </div>
                <GameRight />
                <GameFooter />
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
            <BetSlip />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
