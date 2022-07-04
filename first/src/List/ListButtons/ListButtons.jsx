import React from "react";
export {List} from "../List";



class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'обидеться'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Выберите дествие: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите действе:
                    <select value={this.state.value} onChange={this.handleChange}>
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
}

render(
    <FlavorForm />,
    document.getElementById('root')
);