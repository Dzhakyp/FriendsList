import "./App.css";

import React, { Component } from "react";
import Phonebook from "./components/phonebook";
import ContactsList from "./components/ContactsList";
import shortid from "shortid";
export default class App extends Component {
  state = {
    contacts: [],
  };
  nameId = shortid.generate();


  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (data) => {
    let isExists = false;
    this.state.contacts.forEach((contact) => {
      if (contact.name === data.name) {
        alert(`Contact ${data.name} is already exists`);

        isExists = true;
      }
    });

    const newContact = {
      id: shortid.generate(),
      ...data,
    };

    !isExists &&
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
  };
  handleDelete = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Phonebook onSubmit={this.formSubmitHandler} />
        <ContactsList data={this.state.contacts} onDelete={this.handleDelete} />
      </>
    );
  }
}
