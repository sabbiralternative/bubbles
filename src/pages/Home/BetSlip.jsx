import { useState } from "react";

const BetSlip = ({
  isAtLeastOneBoxActive,
  boxes,
  setBoxes,
  initialBoxes,
  setShowWinModal,
  betAmount,
  setBetAmount,
}) => {
  const [savePattern, setSavePattern] = useState(false);

  const handleChangeBetAmount = (type) => {
    if (type === "minus") {
      if (betAmount > 0 && betAmount <= 100) {
        setBetAmount((prev) => Math.max(prev - 10, 0));
      } else if (betAmount > 100 && betAmount <= 1000) {
        setBetAmount((prev) => Math.max(prev - 100, 0));
      } else if (betAmount > 1000) {
        setBetAmount((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (betAmount >= 0 && betAmount < 100) {
        setBetAmount((prev) => prev + 10);
      } else if (betAmount >= 100 && betAmount < 1000) {
        setBetAmount((prev) => prev + 100);
      } else if (betAmount >= 1000) {
        setBetAmount((prev) => prev + 500);
      }
    }
  };

  const handlePlaceBet = () => {
    const isWin = boxes?.some((box) => box?.active && box?.star);
    const updatedBox = boxes.map((box) => ({
      ...box,
      noStar: box?.active && !box?.star ? true : false,
      roundEnd: true,
      showBubble: box?.active && !box?.star ? true : false,
    }));
    setBoxes(updatedBox);
    if (isWin) {
      setShowWinModal(true);
    }

    setTimeout(() => {
      setBoxes(initialBoxes);
      setShowWinModal(false);
    }, 2000);
  };
  return (
    <div className="control">
      <div className="control__amount">
        <div className="amount">
          <div onClick={() => setBetAmount(100)} className="amount__btn1">
            Min
          </div>
          <div
            onClick={() => handleChangeBetAmount("minus")}
            className="amount__btn2"
          >
            <i className="iconFont iconFont-minus" />
          </div>
          <div className="amount__center">
            <div className="amount__title">
              Bet Amount
              <i className="iconFont iconFont-info" />
              <div className="tooltip">
                <i className="iconFont iconFont-info" />
                Max Profit $10000
              </div>
            </div>
            <label
              htmlFor="e9c11a0f-b8b2-49eb-8378-b66abdc0ff8b"
              className="amount__label"
            />
            <input
              id="e9c11a0f-b8b2-49eb-8378-b66abdc0ff8b"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck="false"
              tabIndex={-1}
              className="amount__input"
              value={betAmount}
            />
          </div>
          <div
            onClick={() => handleChangeBetAmount("plus")}
            className="amount__btn2"
          >
            <i className="iconFont iconFont-plus" />
          </div>
          <div onClick={() => setBetAmount(10000)} className="amount__btn1">
            Max
          </div>
        </div>
      </div>
      <div className="control__buttons">
        <div className={`autobet ${isAtLeastOneBoxActive ? "" : "_disabled"}`}>
          <div className="autobet__button">
            <div className="autobet__inner">
              <i className="iconFont iconFont-autobet" />
            </div>
          </div>
          <div className="autobet__title">
            <span>Auto</span>
          </div>
        </div>
        <div
          onClick={handlePlaceBet}
          className={`play ${isAtLeastOneBoxActive ? "" : "_disabled"}`}
        >
          <div className="play__layout" />
          <div className="play__title">
            {isAtLeastOneBoxActive ? "Place Bet" : "Choose bubbles"}
          </div>
        </div>
        <div
          onClick={() => setSavePattern((prev) => !prev)}
          className={`keep ${savePattern ? "_active" : ""} ${
            isAtLeastOneBoxActive ? "" : "_disabled"
          }`}
        >
          <div className="keep__button">
            <i className="iconFont iconFont-check" />
          </div>
          <div className="keep__title">
            <span>Save pattern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
