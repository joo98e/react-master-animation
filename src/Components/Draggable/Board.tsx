import React from 'react'
import { useForm } from 'react-hook-form'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';
import { Title } from '../../Assets/UIComponent'
import Card from './Card'
import { IKanBan, toDoState } from '../../Atom/TodoAtom';
import { useSetRecoilState } from 'recoil';

interface IBoardProps {
    key: string;
    boardId: string;
    toDos: IKanBan[];
}

interface IForm {
    toDo: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
    min-height: 300px;
`;

const Area = styled.div<{ isDraggingOver: boolean }>`
    flex-grow: 1;
    transition: all 0.2s;
    background: ${props => props.isDraggingOver ? "rgba(0,0,0,0.1)" : "inherit"};
`;

const Form = styled.form`
    width : 100%;

    input {
        width : 100%;
    }
`;

const BoardComponent = ({ toDos, boardId }: IBoardProps) => {
    const setToDos = useSetRecoilState(toDoState);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IForm>()

    const onValid = (data: IForm) => {
        const newTodo = {
            id: Date.now(),
            text: data.toDo
        }
        setToDos(allBoard => {
            return {
                ...allBoard,
                [boardId]: [
                    ...allBoard[boardId],
                    newTodo
                ]
            }
        });

        setValue("toDo", "");
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", { required: `Please write here (${boardId})` })} placeholder={`write a ${boardId}`} />
            </Form>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => {
                    return (
                        <Area isDraggingOver={snapshot.isDraggingOver} ref={provided.innerRef} {...provided.droppableProps}>
                            {toDos.map((todo, index) => {
                                return (
                                    <Card key={todo.id} toDoId={todo.id} toDoText={todo.text} index={index} />
                                )
                            })}
                            {provided.placeholder}
                        </Area>
                    )
                }}
            </Droppable>
        </Wrapper>
    )
}

export default BoardComponent
