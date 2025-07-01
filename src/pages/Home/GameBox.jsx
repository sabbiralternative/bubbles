const GameBox = ({ boxes, setBoxes }) => {
  const handleActiveBox = (box) => {
    const updatedBox = boxes?.map((boxObj) =>
      boxObj?.id === box?.id
        ? {
            ...boxObj,
            active: boxObj?.active ? false : true,
          }
        : { ...boxObj }
    );
    setBoxes(updatedBox);
  };
  return (
    <div className="game-box">
      {boxes?.map((box, i) => {
        return (
          <div
            onClick={() => handleActiveBox(box)}
            key={i}
            data-bubbles-game-index={i}
            className="game-box__cell"
          >
            <div
              className={`game-box__item 
                ${box?.active ? "_active" : box.name}
               ${box?.noStar ? "_null _sprite" : ""} 

              ${box?.star && box?.roundEnd ? "_lose _sprite2" : ""}`}
            >
              {box?.showBubble && (
                <div
                  className="game-box__item-active"
                  style={{ animationDelay: "-0.419106s" }}
                >
                  <div className="game-box__item-layout _rotate2"></div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameBox;
