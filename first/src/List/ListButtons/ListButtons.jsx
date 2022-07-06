import React from "react";
import {List} from "../List";

export const ListButtons = (props) => {
    let state;
    state = {value: 'обидеться'};


    const handleChange = () => {
        this.setState({value:this.value});
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
                    <select onChange={handleChange}>
                        <option value="спать">Спать</option>
                        <option value="работать">Работать</option>
                        <option value="проснуться недовольным">Проснусь недовольным</option>
                        <option value="обидеться">Обидеться</option>
                        <option value="игнорировать">Буду игнорировать близких</option>
                        <option value="похуй">Включу mood похуй</option>
                        <option value="компуктер">Рубиться в компуктер</option>
                        <option value="обижать">Обижать всех своим поведением</option>
                    </select>
                </label>
                <input type="submit" value="Выбрать" />
            </form>
        );
    }

