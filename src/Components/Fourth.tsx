import React, { useEffect, useRef } from 'react'
import { MotionWrapper, MotionBox, MotionCircle, MotionInnerBox } from '@ui/Motions'
import { useMotionValue, useTransform } from 'framer-motion';

interface Props {

}

const boxVars = {
    hover: {
        scale: 1.5, rotateZ: 90
    },
    click: {
        borderRadius: "100px",
        scale: 1,
    },
    drag: {
        scale: 0.5
    }
}

const Fourth = (props: Props) => {
    const RefWrapper = useRef<HTMLDivElement>(null);
    const RefWrapper2 = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 0, 300], [-360, 0, 360]);

    useEffect(() => {
        x.onChange(() => console.log(x.get()));
    });

    return (
        <>
            <MotionWrapper
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    boxSizing: "border-box",
                    padding: "100px"
                }}
            >
                {/* Col 1 */}
                <MotionBox variants={boxVars}
                    whileHover={"hover"}
                    whileTap={"click"}
                    style={{
                        placeSelf: "center"
                    }}
                />

                {/* Col 2 */}
                <MotionBox
                    variants={boxVars}
                    ref={RefWrapper}
                    style={{
                        placeSelf: "center"
                    }}
                >
                    <MotionInnerBox
                        drag
                        dragElastic={1}
                        dragConstraints={RefWrapper}
                        whileDrag={"drag"}
                    />
                </MotionBox>

                {/* Col 3 */}
                <MotionBox
                    ref={RefWrapper2}
                    style={{
                        width: "200px",
                        height: "50px",
                        overflow: "visible",
                        placeSelf: "center"
                    }}
                >
                    <MotionInnerBox
                        style={{
                            x,
                            rotate,
                            // rotate : rotate
                            borderRadius: "10px"
                        }}
                        drag="x"
                        dragSnapToOrigin
                        dragConstraints={RefWrapper2}
                    />
                </MotionBox>
            </MotionWrapper>
        </>
    )
}

export default Fourth
