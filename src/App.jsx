import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Favorite from "./components/Favorite.jsx";
import Notfound from './pages/Notfound.jsx';
import "./App.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    title: "The Shawshank Redemption",
    genre: "Action Crime Drama",
    review:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portra...",
    star: "9.3",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    title: "Bluey",
    genre: "Animation Family",
    review:
      "Bluey is an inexhaustible six year-old Blue Heeler dog, who loves to play and turns everyday family life into extraordinary adventures, developing her imagination as well as her me...",
    star: "9.4",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    title: "Maria Queen of Romania",
    genre: "Biography Documentary History",
    review: "Queen Maria of Romania, granddaughter of Queen Victoria, ruled the country during World War I and 1918, achieving international recognition. Despite personal struggles, she was ban...",
    star: "9.1",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const nextId = useRef(mockData.length);

  const onCreate = (formData) => {
    const newTodo = {
      id: nextId.current++,
      isDone: false,
      title: formData.title,
      genre: formData.genre,
      review: formData.review,
      star: formData.star,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //
  const ontodoDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    
    <div className="App">
      <Header />
      <nav>
          <Link to="/"><h4>Home</h4></Link>
          <Link to="/favorite"><h4>Favorite</h4></Link>
        </nav>
        <Routes>
        <Route
            path="/"
            element={
              <>
                <Editor onCreate={onCreate} />
                <List todos={todos} onDelete={onDelete} ontodoDone={ontodoDone} />
              </>
            }
          />
          <Route
            path="/favorite"
            element={<Favorite todos={todos} onDelete={onDelete} ontodoDone={ontodoDone} />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    
  );
}   

export default App;
