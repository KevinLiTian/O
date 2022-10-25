import { ReactElement } from "react";
import "./O.css";
import "../../utils/scroll_animation"

export default function O(): ReactElement {
  return (
    <div className="homepage">
      <div className="progress"></div>
      <div>
        <svg width="100" height="100" >
        <circle cx={50} cy={50} r={40} stroke="black" stroke-width={3} fill="none"/>
        </svg> 
      </div>
    </div>
  );
}
