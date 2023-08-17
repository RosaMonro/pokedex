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
          <div className="light light--fuchsia">
            <div className="light light--fuchsia-reflex"></div>
          </div>
          <div className="light light--yellow">
            <div className="light light--yellow-reflex"></div>
          </div>
          <div className="light light--green">
            <div className="light light--green-reflex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
