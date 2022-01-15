import React, { useEffect, useRef, useState } from 'react'
import { MotionWrapper, MotionBox, MotionCircle, MotionInnerBox } from '@ui/Motions'
import { AnimatePresence, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import Sixth from './Sixth';

interface Props {

}

const SlideVars = {
    initial: {
        x: 500,
        opacity: 0,
        scale: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: {
        x: -500,
        opacity: 0,
        scale: 0
    }
}

const Seventh = (props: Props) => {
    // col 1
    const [show, setShow] = useState(false);
    const handleShowToggle = () => setShow(show => !show);

    // col 2
    const [currSlide, setCurrSlide] = useState(1);
    const prevSlide = () => setCurrSlide(prev => prev === 1 ? 1 : prev - 1);
    const nextSlide = () => setCurrSlide(prev => prev === 3 ? 3 : prev + 1);

    const vars = {
        initial: {
            opacity: 0,
            scale: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            rotateZ: 360
        },
        exit: {
            opacity: 0,
            scale: 0,
            y: 10,
            rotateZ: 0
        }
    }

    return (
        <>
            <MotionWrapper
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    boxSizing: "border-box",
                    padding: "100px",
                }}
            >
                {/* Col 1 */}
                <div>
                    <AnimatePresence>
                        {show ?
                            <MotionBox
                                variants={vars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            />
                            :
                            null
                        }
                    </AnimatePresence>
                    <button onClick={handleShowToggle}>click me</button>
                </div>

                {/* Col 2 */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* <AnimatePresence> */}
                        {[1, 2, 3].map(item =>
                            currSlide === item ?
                                <MotionBox key={item}
                                    variants={SlideVars}
                                    initial={"initial"}
                                    animate={"animate"}
                                    exit={"exit"}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    {item}
                                </MotionBox>
                                :
                                null
                        )}
                    {/* </AnimatePresence> */}
                    <button onClick={prevSlide}>Prev Please</button>
                    <button onClick={nextSlide}>Next Please</button>
                </div>
            </MotionWrapper>
        </>
    )
}

export default Seventh
