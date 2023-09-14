import "./Icons.scss";
import { iconsMap } from "./iconsMap";

export default function Icons(props) {
  return (
    <svg
      className={
        "icon" +
        (props.isAbsolute == true ? " icon__position-absolute" : "") +
        " icon-size--" +
        props.size +
        " color-" +
        props.color +
        " icon-hoverable"
      }
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      alt={props.alt}
      // onClick={props.onClick}
    >
      <g clipPath="url(#clip0_1921_843)">
        <path d={iconsMap[props.name]} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1921_843">
          <rect
            width="14.5833"
            height="14.5833"
            fill="currentColor"
            transform="translate(0.416656 0.208374)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
