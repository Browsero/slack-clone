import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SidebarItem from "./SidebarItem";
import ChatIcon from "@mui/icons-material/Chat";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleIcon from "@mui/icons-material/People";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import {datebase} from '../firebase';

function Sidebar() {

  const [channels, loading, error] = useCollection(
    datebase.collection("rooms")
  );

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTopInfo>
          <h2>Test Server</h2>
          <h3>
            <FiberManualRecordIcon />
            Username
          </h3>
        </SidebarTopInfo>
        <EditIcon />
      </SidebarHeader>
      <SidebarItemsContainer>
        <SidebarItem title="Threads" Icon={ChatIcon} />
        <SidebarItem title="Mentions & reactions" Icon={InboxIcon} />
        <SidebarItem title="Saved items" Icon={DraftsIcon} />
        <SidebarItem title="Channel browser" Icon={BookmarkIcon} />
        <SidebarItem title="People & user groups" Icon={PeopleIcon} />
        <SidebarItem title="Apps" Icon={AppsIcon} />
        <SidebarItem title="File browser" Icon={FileCopyIcon} />
        <SidebarItem title="Show less" Icon={KeyboardArrowUpIcon} />
      </SidebarItemsContainer>

      <SidebarItemsContainer>
        <SidebarItem title="Channels" Icon={KeyboardArrowDownIcon} />
      </SidebarItemsContainer>

      <SidebarItemsContainer>
        <SidebarItem title="Add Channel" Icon={AddIcon} addChannelOption />
        {channels?.docs.map(doc => (<SidebarItem key={doc.id} id={doc.id} selectChannel title={doc.data().name} />))}
      </SidebarItemsContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-theme);
  color: white;
  flex: 0.3;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 64px;
  max-width: 260px;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
  padding-bottom: 10px;
  justify-content: space-between;
  cursor: default;

  > .MuiSvgIcon-root {
    padding: 8px;
    background-color: white;
    color: var(--slack-theme);
    border-radius: 100%;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      opacity: 0.9;
    }
  }
`;

const SidebarTopInfo = styled.div`
  flex: 1;
  > h2 {
    font-weight: 900;
    margin-bottom: 5px;
    font-size: 1rem;
  }
  > h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 400;
  }
  > h3 > .MuiSvgIcon-root {
    margin-right: 2px;
    margin-top: 2px;
    color: green;
    font-size: 1rem;
  }
`;

const SidebarItemsContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
