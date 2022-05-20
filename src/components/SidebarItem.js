import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { switchRoom } from "../features/appSlice";
import { datebase } from "../firebase";

function SidebarItem({ title, Icon, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Enter the channel name");

    if (channelName) {
      datebase.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if(id){
      dispatch(switchRoom({
        roomId: id
      }))
    }
  };

  return (
    <SidebarItemContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOption>
          <span>#</span> {title}
        </SidebarOption>
      )}
    </SidebarItemContainer>
  );
}

export default SidebarItem;

const SidebarItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;
  > h3 {
    font-weight: 500;
  }
  > .MuiSvgIcon-root {
    margin-right: 10px;
  }
  :hover {
    background-color: var(--slack-dark-theme);
  }
`;

const SidebarOption = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding: 8px;
  > span {
    padding: 7px;
  }
`;
