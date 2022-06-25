import React from "react";

export const CounterDisplay = (props) => {
    const counter = 'Счетчик: ';
    return <h1> {counter}{ props.value }</h1>;
}
