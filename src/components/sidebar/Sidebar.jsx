import { NavLink } from "react-router-dom";
import "./style.scss";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar_menu">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="sidebar_menu-item">Home</li>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="sidebar_menu-item">Services</li>
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="sidebar_menu-item">News</li>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="sidebar_menu-item">Blog</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className="sidebar_menu-item">Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
