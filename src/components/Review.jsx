import React from "react";
import "./Review.css";

const Review = ({ todo, onDelete, ontodoDone }) => {
  return (
    <div className="Review">
      <input type="checkbox" checked={todo.isDone} onChange={() => ontodoDone(todo.id)} />
      <div className="content_wrapper">
        <h2 className="content">{todo.title}</h2>
        <h4>{todo.genre}</h4>
        <ul>{todo.review}</ul>
        <h5>⭐{todo.star}</h5>
        <h4 className="date">{new Date(todo.date).toLocaleString()}</h4>
      </div>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  )
};

export default Review;