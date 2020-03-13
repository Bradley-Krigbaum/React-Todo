import React from "react";

const Todo = props => {
    console.log('props: ', props)
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={e => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
