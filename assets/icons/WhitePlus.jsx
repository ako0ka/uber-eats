import * as React from "react";
import Svg, { G, Circle, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WhitePlus(props) {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_2987_2254)">
        <Circle cx={21.5} cy={17.5} r={17.5} fill="#fff" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default WhitePlus;
