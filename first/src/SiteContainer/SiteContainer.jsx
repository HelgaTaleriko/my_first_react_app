import React from "react";
import {Counter} from "./Counter";
import {ToDoList} from "../ToDoList";
import {List} from "../List"

export const SiteContainer = () => {
    return (
        <div>
            <List/>
            <ToDoList />
            <Counter initial={-7} step={7}/>
         </div>
    )
}

// export function SiteContainer2() {
//     const helloText = 'Привет, мир <3!';
//     return <h1>dfgfd { helloText }</h1>;
// }