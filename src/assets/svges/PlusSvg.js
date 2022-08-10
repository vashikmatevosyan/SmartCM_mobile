import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
import size from "../../utils/Size";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PlusSvg(props) {
    return (
        <Svg
            width={size.size99}
            height= {size.size113}
            viewBox="0 0 99 113"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >

            <G filter="url(#filter0_d_753_593)" >
                <Path
                    d="M45.292 68.263c1.967 3.066 6.449 3.066 8.416 0l13.5-21.039c8.986-14.003-1.07-32.403-17.708-32.403-16.638 0-26.694 18.4-17.708 32.403l13.5 21.04z"
                    fill={props.bgColor}
                />
            </G>
            <Path d="M56.239 39.821h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z" fill= {props.color} />
            <Defs></Defs>
        </Svg>
    )
}

export default PlusSvg