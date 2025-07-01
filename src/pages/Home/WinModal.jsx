const WinModal = ({ betAmount }) => {
  return (
    <div
      className="win-screen"
      style={{
        "--top": "157.4739532470703px",
        "--left": "82.00520324707031px",
      }}
    >
      <div className="win-screen__inner">
        <div className="win-screen__sum">{betAmount + betAmount}</div>
      </div>
    </div>
  );
};

export default WinModal;
