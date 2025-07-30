import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;

  ul {
    display: flex;
    gap: 1rem;
  }

  a {
    color: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem;
  }
  .site-title {
    font-size: 2rem;
  }

  li.active {
    background-color: #555;
  }

  li:hover {
    background-color: #777;
  }
`;

export default NavContainer;
