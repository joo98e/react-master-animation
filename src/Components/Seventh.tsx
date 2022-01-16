import React, { useEffect, useRef, useState } from 'react'
import { MotionWrapper, MotionBox, MotionCircle, MotionInnerBox } from '@ui/Motions'
import { AnimatePresence, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import Sixth from './Sixth';

interface Props {

}

const Seventh = (props: Props) => {
    // col 1
    const [show, setShow] = useState(false);
    const handleShowToggle = () => setShow(show => !show);

    // col 2
    const [currSlide, setCurrSlide] = useState(1);
    const [back, setBack] = useState(false);
    const prevSlide = () => {
        setBack(true);
        setCurrSlide(prev => prev === 1 ? 1 : prev - 1);
    };
    const nextSlide = () => {
        setBack(false);
        setCurrSlide(prev => prev === 10 ? 10 : prev + 1);
    };

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

    const SlideVars = {
        entry: (back: boolean) => ({
            x: back ? -500 : 500,
            opacity: 0,
            scale: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: .3
            }
        },
        exit: (back: boolean) => ({
            x: back ? 500 : -500,
            opacity: 0,
            scale: 0,
            transition: {
                duration: .3
            }
        })
    }

    useEffect(() => {
        console.log("is rendering");
    })

    return (
        <>
            <MotionWrapper
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
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
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position:"relative" }}>
                    <AnimatePresence custom={back}>
                        <MotionBox
                            key={currSlide}
                            custom={back}
                            variants={SlideVars}
                            initial={"entry"}
                            animate={"center"}
                            exit={"exit"}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", backgroundColor: "white" }}
                        >
                            {currSlide}
                        </MotionBox>
                    </AnimatePresence>
                    <button onClick={prevSlide} style={{ width: "200px", position: "absolute", bottom: 30 }}>Prev Please</button>
                    <button onClick={nextSlide} style={{ width: "200px", position: "absolute", bottom: 0 }}>Next Please</button>
                </div>
            </MotionWrapper>
        </>
    )
}

export default Seventh
