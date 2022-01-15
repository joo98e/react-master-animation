import React from 'react'
import { DropResult, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil';
import { Boards, FlexBox } from '../../Assets/UIComponent';
import { toDoState } from '../../Atom/TodoAtom';
import Board from './Board';

interface Props {

}

const Second = (props: Props) => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;

        if (destination.droppableId === source.droppableId) {
            // same board
            setToDos((allBoards) => {
                const boardCopied = [...allBoards[source.droppableId]];
                const taskObj = boardCopied[source.index];

                boardCopied.splice(source.index, 1);
                boardCopied.splice(destination?.index, 0, taskObj);

                return {
                    ...allBoards,
                    [source.droppableId]: [...boardCopied]
                };
            })
        }

        if (destination.droppableId !== source.droppableId) {
            setToDos(allBoards => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const destinationBoard = [...allBoards[destination.droppableId]];
                const taskObj = sourceBoard[source.index];

                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination.index, 0, taskObj);

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard
                }
            })
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <FlexBox>
                    <Boards>
                        {
                            Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)
                        }
                    </Boards>
                </FlexBox>
            </DragDropContext>

        </>
    )
}

export default Second
