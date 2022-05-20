import React from "react";
import styled from "styled-components";

function Message(props) {
  return (
    <MessageContainer>
      <img alt={props.user} src={props.avatar} />
      <MessageInfo>
        <h4>
          {props.user}{" "}
          <span style={{ fontWeight: "400", fontSize: ".8rem", color: "gray" }}>
            {new Date(props.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{props.message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  > img {
    width: 48px;
    border-radius: 15px;
  }
`;

const MessageInfo = styled.div``;
