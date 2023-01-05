import React, { Component } from "react";
import Filter from "../Filter";
export default class ContactsList extends Component {
  state = {
    filter: "",
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = (data, filter) => {
    return data.filter((info) =>
      info.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { data } = this.props;
    const { filter } = this.state;
    const onDelete = this.props.onDelete;
    const filteredData = this.filteredContacts(data, filter);
    const contactsItem = filteredData.map(({ id, name, number }) => (
      <li className="item__title" key={id}>
        {name}: {number}
        <button
          className="btn__delete"
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ));
    // console.log(contacts);
    return (
      <>
        <Filter value={this.state.filter} onChange={this.handleFilter} />;
        <ul>{contactsItem}</ul>;
      </>
    );
  }
}
