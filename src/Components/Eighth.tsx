import React, { useEffect, useRef, useState } from 'react'
import { MotionWrapper, MotionBox, MotionCircle, MotionInnerBox } from '@ui/Motions'

interface Props {

}

const overrideCircleStyle: React.CSSProperties[] = [
    {
        placeSelf: "unset",
        backgroundColor: "#5A0089"
    },
    {
        display: "flex",
        justifyContent: "normal",
        alignItems: "normal",
        overflow: "visible"
    },
    {
        display: "grid",
        gridTemplateColumns: "repeact(2, 1fr)"
    }
]

const Eighth = (props: Props) => {
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked(prev => !prev);

    return (
        <div>
            <MotionWrapper onClick={toggleClicked} style={overrideCircleStyle[2]}>
                <MotionBox style={overrideCircleStyle[1]}>
                    {clicked ? <MotionCircle layoutId="circle" style={overrideCircleStyle[0]} /> : null}
                </MotionBox>
                <MotionBox style={overrideCircleStyle[1]}>
                    {!clicked ? <MotionCircle layoutId="circle" style={overrideCircleStyle[0]} /> : null}
                </MotionBox>
            </MotionWrapper>
        </div>
    )
}

export default Eighth
