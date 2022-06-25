import React from "react";
import {Counter} from "./Counter";

export const SiteContainer = () => {
    return (
        <div>
            <Counter step={7}/>
            <Counter initial={-7} step={7}/>
         </div>
    )
}

// export function SiteContainer2() {
//     const helloText = 'Привет, мир <3!';
//     return <h1>dfgfd { helloText }</h1>;
// }