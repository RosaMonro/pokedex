import "./BtnCross.scss";

export default function BtnCross() {
  return (
    <>
      <div className="cross">
        <div className="leftcross">
          <div className="leftT"></div>
        </div>
        <div className="topcross">
          <div className="upT"></div>
        </div>
        <div className="rightcross">
          <div className="rightT"></div>
        </div>
        <div className="midcross">
          <div className="midCircle"></div>
        </div>
        <div className="botcross">
          <div className="downT"></div>
        </div>
      </div>
    </>
  );
}
