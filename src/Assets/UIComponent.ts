import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    max-width: 960px;
    width: 100%;
    height: 100vh;
    min-height: 300px;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
`;

export const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap : 10px;
`;

export const Board = styled.div`
    min-height: 300px;
    padding: 20px 10px;
    padding-top: 30px;
    border-radius: 5px;
    background-color: ${props => props.theme.boardColor};
`;

export const Card = styled.div<{
    isDragging : boolean;
}>`
    margin-bottom: 5px;
    padding :15px 10px;
    box-shadow : ${props => props.isDragging ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none"};
    background-color: ${props => props.isDragging ? "#EFEFEF" : props.theme.cardColor};
`;

export const Title = styled.h2`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: 18px;
`;