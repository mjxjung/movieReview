import React from "react";
import Review from "./Review";
// import Favorite from "./Favorite";
import "./List.css";

const List = ({ todos, onDelete, ontodoDone }) => {
  const doneCount = todos.filter(todo => todo.isDone).length;

  return (
    <div className="List">
      <h3>후기 모음 ✍️</h3>
      <div className='done'>아카이브된 항목: {doneCount}</div>

      <div className="todos_wrapper">
        {todos.map(todo => (
          <Review key={todo.id} todo={todo} onDelete={onDelete} ontodoDone={ontodoDone}/>
        ))}
      </div>
    </div>
  );
}

export default List;