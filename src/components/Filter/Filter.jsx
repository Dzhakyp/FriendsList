import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <form className="item__form">
      <label>
        <input
          className="item__input"
          placeholder="Поиск "
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default Filter;
