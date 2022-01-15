import React from 'react'
import { MotionWrapper, MotionBox, MotionCircle } from '@ui/Motions'

interface Props {

}

// 회전 vars
const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 5 } }
}

// 붕 vars
const myBoxVars = {
    start: {
        opacity: 0,
        scale: .5
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: .5,
            bounce: .5,
            delayChildren : .5,
            staggerChildren : .2
        }
    }
}

const circleVars = {
    start: {
        opacity: 0,
        y : 10
    },
    end: {
        opacity: 1,
        y: 0
    }
}

const Third = (props: Props) => {
    return (
        <>
            <MotionWrapper>
                <MotionBox
                    variants={myBoxVars}
                    initial="start"
                    animate="end"
                >
                    <MotionCircle variants={circleVars} />
                    <MotionCircle variants={circleVars} />
                    <MotionCircle variants={circleVars} />
                    <MotionCircle variants={circleVars} />
                </MotionBox>
            </MotionWrapper>
        </>
    )
}

export default Third
