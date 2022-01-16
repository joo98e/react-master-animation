import React, { useEffect, useRef, useState } from 'react'
import { MotionWrapper, MotionNormalBox, MotionCircle, MotionInnerBox, MotionGrid } from '@ui/Motions'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

interface Props {

}

const Overlay = styled(motion.div)`
    position : absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width : 100%;
    height: 100%;
`;

const Ninth = (props: Props) => {
    const [clickedId, setClickedId] = useState<null | string>(null);

    return (
        <MotionWrapper style={{ justifyContent: "space-around" }}>
            <MotionGrid>
                {
                    [0, 1, 2, 3].map(item => {
                        return (
                            <MotionNormalBox
                                key={String(item)}
                                layoutId={String(item)}
                                onClick={() => setClickedId(String(item))}
                                style={{ backgroundColor: "#FFF" }}
                            />
                        )
                    })
                }
            </MotionGrid>

            {clickedId && <Overlay
                onClick={() => setClickedId(null)}
                initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: .7 }}
            >
                <MotionNormalBox
                    layoutId={clickedId}
                    style={{ width: 800, height: 600 }}
                />
            </Overlay>}


        </MotionWrapper>
    )
}

export default Ninth
