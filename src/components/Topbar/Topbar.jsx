import "./Topbar.scss";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="camera">
          <div className="camera-glass">
            <div className="camera-glass-reflex"></div>
          </div>
        </div>
        <div className="lights">
          <div className="light ">
            <div className="light-reflex"></div>
          </div>
          <div className="light">
            <div className="light-reflex"></div>
          </div>
          <div className="light">
            <div className="light-reflex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
