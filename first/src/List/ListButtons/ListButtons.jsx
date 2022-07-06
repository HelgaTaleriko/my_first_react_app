import React from "react";
import {List} from "../List";

export const ListButtons = (props) => {
    let state;
    state = {value: 'обидеться'};


    const handleChange = () => {
        let target;
        this.setState({value:target.value});
    }

    const handleSubmit = () => {
        alert('Выберите дествие: ' + state.value);

        function preventDefault() {

        }

        preventDefault();
    }

     return (
            <form onSubmit={handleSubmit}>
                <label>
                    Выберите действе:
                    <select value={state.value} onChange={handleChange}>
                        <option value="offend">Спать</option>
                        <option value="lime">Работать</option>
                        <option value="coconut">Проснусь недовольным</option>
                        <option value="mango">Обидеться</option>
                        <option value="mango">Буду игнорировать близких</option>
                        <option value="mango">Включу mood похуй</option>
                        <option value="mango">Рубиться в компуктер</option>
                        <option value="mango">Обижать всех своим поведением</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

