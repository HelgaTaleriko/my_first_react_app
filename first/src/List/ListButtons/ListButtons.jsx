import React from "react";


export const ListButtons = (props)=> {
    this.state = {value: 'обидеться'};
    handleChange = handleChange.bind(this);
    handleSubmit = handleSubmit.bind(this);

    function handleChange(props) {

    }

    handleChange (props)
    {
        let target;
        this.setState({value:target.value});
    }

    function handleSubmit(props) {

    }

    handleSubmit(props)
    {
            alert('Выберите дествие: ' + this.state.value);
    }

    return (
                <div onSubmit={handleSubmit}>
                    <label>
                        Выберите действе:
                        <select value={this.state.value} onChange={handleChange}>
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
                    <input type="submit" value="Submit"/>
                </div>
    );
}