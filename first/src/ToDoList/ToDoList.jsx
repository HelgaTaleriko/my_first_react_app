import React, {useState} from "react";

import {ToDoListButtons} from "./ToDoListButtons";
import {ToDoListDisplay} from "./ToDoListDisplay";
import {type} from "@testing-library/user-event/dist/type";

export const ToDoList = () => {
    const [items, setItems] = useState([{text:'test'}])
    const addText = (text) => {
        setItems([...items, { text: text } ])
    }
    const minusText = (text) => {
        setItems([{}])

    }
    return (
        <div>
            <ToDoListDisplay items={items}/>
            <ToDoListButtons addText={addText} minusText={minusText}/>
        </div>
    )

}
