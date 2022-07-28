import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from "../../utils/Size";

function EyeSvg(props) {
    return (
        <Svg
            width={size.size18}
            height={size.size18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.002 3c3.102.003 5.888 2.177 7.452 5.817a.557.557 0 010 .444c-1.564 3.642-4.35 5.816-7.452 5.818h-.004c-3.102-.002-5.888-2.176-7.452-5.818a.564.564 0 010-.444C3.11 5.177 5.896 3.003 8.998 3h.004zM9 4.125c-2.577.001-4.928 1.833-6.323 4.914C4.072 12.121 6.422 13.954 9 13.954c2.578 0 4.927-1.833 6.322-4.915C13.927 5.96 11.578 4.126 9 4.125zm0 1.981a2.937 2.937 0 012.934 2.934A2.937 2.937 0 019 11.973 2.936 2.936 0 016.066 9.04 2.937 2.937 0 019 6.106zm0 1.125a1.81 1.81 0 00-1.809 1.81 1.81 1.81 0 003.618 0c0-.998-.812-1.81-1.81-1.81z"
                fill="#83B7AD"
            />
        </Svg>
    )
}

export default EyeSvg