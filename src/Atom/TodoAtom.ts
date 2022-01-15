import { atom } from "recoil";

interface IToDoState {

    [key: string]: IKanBan[];
}

export interface IKanBan {
    id : number;
    text : string;
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [
            {
                id : 1,
                text : "Hello"
            },
            {
                id : 2,
                text : "goods"
            },
            {
                id : 3,
                text : "very goods"
            },
        ],
        "Doing": [
            
        ],
        "Done": [
            
        ]
    }
})