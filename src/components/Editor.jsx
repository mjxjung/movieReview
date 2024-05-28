import React, { useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    review: "",
    star: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 폼이 제출될 때 호출되는 핸들러
  const handleSubmit = () => {
    if (formData.title.trim() && formData.genre.trim() && formData.review.trim() && formData.star.trim()) {
      onCreate(formData);
      setFormData({
        title: "",
        genre: "",
        review: "",
        star: ""
      })
    }
  };

  return (
    <div className="Editor">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Movie title..."
      />
      <input 
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="genre...(action, romance...)"
      />
      <textarea
        name="review"
        value={formData.review}
        onChange={handleChange}
        placeholder="Write your review..."
        rows="3" // 초기 줄 수 설정
      />
      <input 
        name="star"
        value={formData.star}
        onChange={handleChange}
        placeholder="⭐ rating(1~10)"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Editor;