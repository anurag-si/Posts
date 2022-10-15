import React from "react";

const Display = ({ data }) => {
  const listItems = data.map((datas) => <li key={datas.id}>
    <h4>{datas.title}</h4>
    <h6>{datas.body}</h6>
    </li>);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Display;
