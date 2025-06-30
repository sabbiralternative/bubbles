const Home = () => {
  return (
    <div id="app">
      <div
        id="ModuleLayoutDiv"
        style={{
          position: "fixed",
          zIndex: 1000,
          left: "0px",
          top: "0px",
          width: "100%",
          height: "40px",
          background:
            "linear-gradient(rgba(34, 34, 34, 0.5) 0%, rgba(34, 34, 34, 0) 100%)",
        }}
      />
      <div className="demo--Ig8fs">
        <div className="demoIcon--ozzEI" />
        <div>Demo Mode</div>
      </div>
      <div
        data-track="balance"
        className="balance--Kjiqa"
        style={{ position: "fixed", zIndex: 1000, left: "8px", top: "8px" }}
      >
        <div className="balanceTitle--JnSFJ">Balance:</div>
        <i className="fm-iconFont fm-iconFont-ios-creditcard" />$
        <span className="balanceSum--_ab3Z">1011.13</span>
      </div>
      <div
        className="name--TP6Ls"
        style={{ position: "fixed", zIndex: 1000, left: "8px", bottom: "0px" }}
      >
        Turbo Games • Bubbles
      </div>
      <div
        style={{ position: "fixed", zIndex: 1000, right: "8px", bottom: "0px" }}
      >
        <div className="time--tHxDp">30 Jun, 2025 | 18:13:11</div>
      </div>
      <div
        id
        style={{
          position: "fixed",
          zIndex: 1000,
          right: "0px",
          top: "68px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          pointerEvents: "none",
        }}
      />
      <div
        id
        style={{
          position: "fixed",
          zIndex: 1000,
          right: "8px",
          top: "8px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <div data-track="settings" className="icon--k9yLr">
          <i className="fm-iconFont fm-iconFont-ios-nav" />
        </div>
        <div className="icon--k9yLr" style={{ marginRight: "8px" }}>
          <i className="fm-iconFont fm-iconFont-ios-music-on" />
        </div>
        <div
          data-track="universe"
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <span className="iconActiveIndicator--CMTO4" />
          <div className="iconTurboUniverse--Of1Ih" />
        </div>
      </div>
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
                  <div className="game-box">
                    <div data-bubbles-game-index={0} className="game-box__cell">
                      <div className="game-box__item _default3" />
                    </div>
                    <div data-bubbles-game-index={1} className="game-box__cell">
                      <div className="game-box__item _default4" />
                    </div>
                    <div data-bubbles-game-index={2} className="game-box__cell">
                      <div className="game-box__item _default1" />
                    </div>
                    <div data-bubbles-game-index={3} className="game-box__cell">
                      <div className="game-box__item _default2" />
                    </div>
                    <div data-bubbles-game-index={4} className="game-box__cell">
                      <div className="game-box__item _default0" />
                    </div>
                    <div data-bubbles-game-index={5} className="game-box__cell">
                      <div className="game-box__item _default2" />
                    </div>
                    <div data-bubbles-game-index={6} className="game-box__cell">
                      <div className="game-box__item _default4" />
                    </div>
                    <div data-bubbles-game-index={7} className="game-box__cell">
                      <div className="game-box__item _default1" />
                    </div>
                    <div data-bubbles-game-index={8} className="game-box__cell">
                      <div className="game-box__item _default2" />
                    </div>
                    <div data-bubbles-game-index={9} className="game-box__cell">
                      <div className="game-box__item _default3" />
                    </div>
                    <div
                      data-bubbles-game-index={10}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default4" />
                    </div>
                    <div
                      data-bubbles-game-index={11}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default0" />
                    </div>
                    <div
                      data-bubbles-game-index={12}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default0" />
                    </div>
                    <div
                      data-bubbles-game-index={13}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default1" />
                    </div>
                    <div
                      data-bubbles-game-index={14}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default0" />
                    </div>
                    <div
                      data-bubbles-game-index={15}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default0" />
                    </div>
                    <div
                      data-bubbles-game-index={16}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default1" />
                    </div>
                    <div
                      data-bubbles-game-index={17}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default4" />
                    </div>
                    <div
                      data-bubbles-game-index={18}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default1" />
                    </div>
                    <div
                      data-bubbles-game-index={19}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default2" />
                    </div>
                    <div
                      data-bubbles-game-index={20}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default2" />
                    </div>
                    <div
                      data-bubbles-game-index={21}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default1" />
                    </div>
                    <div
                      data-bubbles-game-index={22}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default4" />
                    </div>
                    <div
                      data-bubbles-game-index={23}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default2" />
                    </div>
                    <div
                      data-bubbles-game-index={24}
                      className="game-box__cell"
                    >
                      <div className="game-box__item _default1" />
                    </div>
                  </div>
                </div>
                <div className="game__right">
                  <div className="game-range-v">
                    <div className="game-range-v__plus">
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
                        min={1}
                        max={10}
                        step={1}
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
                        style={{ pointerEvents: "none", height: "55.5556%" }}
                      />
                      <div
                        className="game-range-v__center"
                        style={{ pointerEvents: "none" }}
                      />
                      <div
                        className="game-range-v__bottom"
                        style={{ pointerEvents: "none", height: "44.4444%" }}
                      />
                    </div>
                    <div className="game-range-v__minus">
                      <i className="iconFont iconFont-minus" />
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
