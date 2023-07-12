import { useState, useEffect } from "react";
import "./Navbar.css";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.jwt);
  const [userId, setUserId] = useState(localStorage.user_id);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.jwt);
    setUserId(localStorage.user_id);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="navbar--title">HYKRZ</h1>
      <div className="navbar--nav">
        <ul className="navbar--list">
          <li className="navbar--list--item">
            <a href="#">Home</a>
          </li>
          <li className="navbar--list--item">
            <a href="#">HYKZ</a>
          </li>
          <li className="navbar--list--item">
            {isLoggedIn ? <a href={`/users/${userId}`}>HYKR</a> : <a href="/signup">Signup</a>}
          </li>
        </ul>
      </div>
    </nav>
  );
}
