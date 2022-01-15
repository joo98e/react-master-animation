import React from 'react'
import { MotionWrapper, MotionBox } from '@ui/Motions'

interface Props {

}

const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 5 } }
}

const Third = (props: Props) => {
    return (
        <>
            <MotionWrapper>
                <MotionBox
                    variants={myVars}
                    initial="start"
                    animate="end"
                >

                </MotionBox>
            </MotionWrapper>
        </>
    )
}

export default Third
