import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const NavContainer = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 6vw;
width: 100vw;
height: 25px;
z-index: 100;
font-size: 1.75rem;
font-family: 'Oleo Script',cursive;
font-weight: 900;
border-bottom: 1px solid rgba(0,0,0,.0975);
`

const NavElem = styled.div`

`






class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch /><input type="text" />
        <NavElem>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </NavElem>
      </NavContainer>
    );
  }
}

export default Navbar