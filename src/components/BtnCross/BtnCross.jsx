import "./BtnCross.scss";

export default function BtnCross(props) {
  const { onLeftClick, onRightClick } = props;

  return (
    <>
      <div className="cross">
        <div
          className="leftcross"
          onClick={onLeftClick}
          aria-label="previous pokemon"
        >
          <div className="leftT"></div>
        </div>
        <div className="topcross">
          <div className="upT"></div>
        </div>
        <div
          className="rightcross"
          onClick={onRightClick}
          aria-label="next pokemon"
        >
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
