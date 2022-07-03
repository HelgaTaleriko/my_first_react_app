import React, {useState} from "react";

export const ToDoListButtons = (props) => {
    const {addText, minusText}= props
    const [input, setInput] = useState('')
    const handleChange = (event) => setInput(event.target.value)
    const handleAdd = () => addText(input)
    const minText = () => minusText(input);
    return (
        <div>
            <input onChange={handleChange} value={input} type={"text"}/>
            <br/>
            <button onClick={handleAdd}> Добавить </button>
            <button onClick={minusText}> Очистить форму </button>
        </div>
    );
}
