import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux/es/exports";
import ChatInput from "./ChatInput";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { datebase } from "../firebase";
import Message from "./Message";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef(null);

  const [roomDetails] = useDocument(
    roomId && datebase.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      datebase
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {}, [roomId, loading]);

  return (
    <ChatContainer>
      <>
        <Header>
          <LeftHeader>
            {roomDetails ? (
              <h4>
                <strong>{roomDetails.data().name}</strong>
                <FavoriteBorderIcon />
              </h4>
            ) : (
              <p style={{ textTransform: "none" }}>
                You are not currently in any room.
              </p>
            )}
          </LeftHeader>

          <RightHeader>
            <HelpOutlineIcon />
            <p>Details</p>
          </RightHeader>
        </Header>
      </>
      <Messages>
        {loading ? (
          <img
            alt="loading"
            src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
          />
        ) : (
          roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, avatar } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                avatar={avatar}
              />
            );
          })
        )}
        <ChatBottom ref={chatRef} />
      </Messages>

      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`;
const LeftHeader = styled.div`
  font-size: 1.4rem;
  margin-left: 20px;
  cursor: default;
  text-transform: lowercase;
  > h4 {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  > h4 > .MuiSvgIcon-root {
    font-size: 1.3rem;
  }
`;
const RightHeader = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 1.4rem;
  margin-right: 20px;
  cursor: pointer;
`;

const Messages = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ChatBottom = styled.div`
  padding-bottom: 80px;
`;
