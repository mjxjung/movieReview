import "./Header.css";

const Header = () => {
  return ( 
    <div className="Header">
      <h1>🎥 Minji's Movie Review 🎞️</h1>
      <h2>{new Date().toDateString()}</h2>
    </div>
  )
}

export default Header;
