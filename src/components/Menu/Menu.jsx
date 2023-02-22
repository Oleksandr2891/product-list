import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menuWrapper">
      <ul className="menu">
        <li className="menuLink">
          <Link to="/task1">Task#1</Link>
        </li>
        <li className="menuLink">
          <Link to="/task2">Task#2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
