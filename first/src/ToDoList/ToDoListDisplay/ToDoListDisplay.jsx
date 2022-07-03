import React from "react";
import {ToDoList} from "../ToDoList";
import {ToDoListItem} from "./ToDoListItem";

export const ToDoListDisplay = (props) => {
    const text = 'Список дел:';
    const {items} = props;
    return (
    <div>
        <h1> {text}</h1>
        <ul>
            {items.map((item) => <ToDoListItem text={item.text}/>)}
        </ul>


    </div>
    )

}
