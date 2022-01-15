import React, { useEffect, useRef } from 'react'
import { MotionWrapper, MotionBox, MotionCircle, MotionInnerBox } from '@ui/Motions'
import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import Sixth from './Sixth';

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

const Fifth = (props: Props) => {
    const RefWrapper = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 0, 300], [-360, 0, 360]);
    const gradient = useTransform(x,
        [-150, 0, 300],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 238))",
        ]
    );
    const { scrollY, scrollYProgress } = useViewportScroll();
    const scrollScale = useTransform(scrollYProgress, [0, 1], [0.5, 5])

    useEffect(() => {
        
    });

    return (
        <>
            <MotionWrapper
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    boxSizing: "border-box",
                    padding: "100px",
                }}
            >
                {/* Col 1 */}
                <MotionBox
                    style={{
                        
                    }}
                >
                    <Sixth />
                </MotionBox>

                {/* Col 2 */}
                <MotionBox
                    style={{
                        scale : scrollScale,
                        background : "tomato"
                    }}
                >
                </MotionBox>

                {/* Col 3 */}
                <MotionBox
                    ref={RefWrapper}
                    style={{
                        width: "200px",
                        height: "50px",
                        overflow: "visible",
                        placeSelf: "center",
                        background: gradient
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
                        dragConstraints={RefWrapper}
                    />
                </MotionBox>
            </MotionWrapper>
        </>
    )
}

export default Fifth
