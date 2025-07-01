import { useSelector } from "react-redux";
import { useSound } from "../../context/ApiProvider";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";

const Header = () => {
  const { sound, setSound } = useSound();
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);

  const handleSoundToggle = () => {
    if (sound) {
      sessionStorage.setItem("sound", false);
      setSound(false);
    } else {
      sessionStorage.removeItem("sound");
      setSound(true);
    }
  };
  return (
    <>
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
      {/* <div className="demo--Ig8fs">
        <div className="demoIcon--ozzEI" />
        <div>Demo Mode</div>
      </div> */}
      <div
        data-track="balance"
        className="balance--Kjiqa"
        style={{ position: "fixed", zIndex: 1000, left: "8px", top: "8px" }}
      >
        <div className="balanceTitle--JnSFJ">Balance:</div>
        <i className="fm-iconFont fm-iconFont-ios-creditcard" />
        <span className="balanceSum--_ab3Z">{balance}</span>
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
        <div
          onClick={handleSoundToggle}
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <i
            className={`fm-iconFont fm-iconFont-ios-music-${
              sound ? "on" : "off"
            }`}
          />
        </div>
        {/* <div
          data-track="universe"
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <span className="iconActiveIndicator--CMTO4" />
          <div className="iconTurboUniverse--Of1Ih" />
        </div> */}
      </div>
    </>
  );
};

export default Header;
