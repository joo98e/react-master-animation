import { motion } from "framer-motion";
import styled from "styled-components";


export const MotionWrapper = styled(motion.div).attrs({ dataInfo: "motion div(use wrapper)" })`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const MotionBox = styled(motion.div).attrs({ dataInfo: "motion div(use box)" })`
    display : grid;
    grid-template-columns: repeat(2, 1fr);
    width :200px;
    height: 200px;
    background-color: rgba(255,255,255, 0.2);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow : hidden;
`;

export const MotionInnerBox = styled(motion.div)`
    width : 50px;
    height : 50px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color : #FFF;
`;

export const MotionCircle = styled(motion.div)`
    place-self: center;
    width : 70px;
    height: 70px;
    border-radius: 35px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: whitesmoke;
`;
