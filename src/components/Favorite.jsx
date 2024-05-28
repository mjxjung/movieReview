import React from "react";
import Review from "./Review";
import "./Favorite.css";

const Favorite = ({ todos, onDelete, ontodoDone }) => {
  const completedTodos = todos.filter(todo => todo.isDone);
  const doneCount = todos.filter(todo => todo.isDone).length;

  return (
    <div className="Favorite">
      <div className='done'>아카이브된 항목: {doneCount}</div>
      {completedTodos.length > 0 ? (
        completedTodos.map(todo => (
          <Review
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            ontodoDone={ontodoDone}
          />
        ))
      ) : (
        <h5>완료된 항목이 없습니다.</h5>
      )}
    </div>
  );
};

export default Favorite;