import React, { Component } from "react";
import shortid from "shortid";

const intialState = {
  name: "",
  number: "",
};

export default class Phonebook extends Component {
  state = intialState;

  nameInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { props, state } = this;
    props.onSubmit(state);
    this.reset();
  };
  reset = () => {
    this.setState(intialState);
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="title">Phonebook</h1>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Имя контакта"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="{this.nameInputId}"
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="tel"
            name="number"
            placeholder="Введите номер"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="{this.nameInputId}"
            onChange={this.handleChange}
          />
          <button className="btn">Сохранить</button>
          <p>
            {this.state.name} : {this.state.number}
          </p>
        </form>{" "}
      </>
    );
  }
}
