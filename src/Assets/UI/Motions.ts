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
    width :200px;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;