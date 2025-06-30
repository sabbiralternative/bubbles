const BetSlip = () => {
  return (
    <div className="control">
      <div className="control__amount">
        <div className="amount">
          <div className="amount__btn1">Min</div>
          <div className="amount__btn2">
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
            />
          </div>
          <div className="amount__btn2">
            <i className="iconFont iconFont-plus" />
          </div>
          <div className="amount__btn1">Max</div>
        </div>
      </div>
      <div className="control__buttons">
        <div className="autobet _disabled">
          <div className="autobet__button">
            <div className="autobet__inner">
              <i className="iconFont iconFont-autobet" />
            </div>
          </div>
          <div className="autobet__title">
            <span>Auto</span>
          </div>
        </div>
        <div className="play _disabled">
          <div className="play__layout" />
          <div className="play__title">Choose bubbles</div>
        </div>
        <div className="keep _active _disabled">
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
