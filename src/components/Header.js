import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";

function Header() {
  return (
    <Container>
      {/* Left section */}
      <HeaderLeft>
        <AvatarContainer />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Middle Section */}
      <HeaderSearchBar>
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </HeaderSearchBar>

      {/* Right Section */}
      <HeaderRight>
        <HelpIcon />
      </HeaderRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background-color: var(--slack-theme);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 24px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-right: 30px;
  }
`;

const AvatarContainer = styled(Avatar)`
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.9;
  }
`;

const HeaderSearchBar = styled.div`
  display: flex;
  flex: 0.4;
  border-radius: 5px;
  border: 1px solid white;
  text-align: center;
  padding: 0 50px;
  color: white;
  > input {
    background: transparent;
    border: 0;
    outline: 0;
    text-align: center;
    min-width: 30vw;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.9;
  }

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
