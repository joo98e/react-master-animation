import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card } from '../../Assets/UIComponent'

interface ICard {
    toDoId: number;
    toDoText: string;
    index: number;
}

const CardComponent = ({ toDoId, toDoText, index }: ICard) => {
    return (
        <Draggable draggableId={String(toDoId)} key={toDoText} index={index} >
            {
                (provided, snapshot) =>
                    <Card
                        isDragging={snapshot.isDragging}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {toDoText}
                    </Card>
            }
        </Draggable>
    )
}

export default React.memo(CardComponent);
