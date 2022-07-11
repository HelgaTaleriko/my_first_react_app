import React, {useState} from "react";

export const ListButtons = () => {
    const [selectedValue, setSelectedValue] = useState('обидеться');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('Выберите дествие: ' + selectedValue);

        event.preventDefault();

    }

     return (
            <form onSubmit={handleSubmit}>
                <label>
                    Выберите действе:
                    <select value={selectedValue} onChange={handleChange}>
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

