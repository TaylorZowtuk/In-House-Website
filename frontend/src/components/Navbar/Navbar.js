import React from "react";
import NavContainer from "./styles";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <NavContainer>
      <Link to="/" className="site-title">
        League In-House
      </Link>
      <ul>
        <CustomLink to="/teams">Teams</CustomLink>
        <CustomLink to="/leaderboards">Leaderboards</CustomLink>
        <CustomLink to="/search">Search</CustomLink>
      </ul>
    </NavContainer>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
