import MetisMenu from "@metismenu/react";
import 'metismenujs/style';
import { NavLink, Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <MetisMenu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="#" className="has-arrow">Other Pages</Link>
          <ul>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </li>
        <li>
          <Link to="#" className="has-arrow">External Pages</Link>
          <ul>
            <li><a href="https://github.com/onokumus/metismenujs" target="_blank" rel="noopener noreferrer">metismenujs</a></li>
            <li><a href="https://github.com/onokumus/metismenu" target="_blank" rel="noopener noreferrer">metismenu jquery</a></li>
          </ul>
        </li>
      </MetisMenu>
    </>
  )
}

export default SidebarNav