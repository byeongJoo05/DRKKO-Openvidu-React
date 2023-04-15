import React from "react";
import OpenViduVideoComponent from "./OvVideo";
import styled from "styled-components";
import "./UserVideo.css";

const UserVideoComponent = (props) => {
  const Card = styled.div`
    border-radius: 20px;
    background: #64dfdf;
    margin: 1em;
    padding: 0.8em;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 100);
  `;

  const Nickname = styled.div`
    background: #64dfdf;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 16px;
  `;

  const getNicknameTag = () => {
    // Gets the nickName of the user
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  return (
    <Card>
      {props.streamManager !== undefined ? (
        <div className="streancomponent">
          <OpenViduVideoComponent streamManager={props.streamManager} />
        </div>
      ) : null}
      <div>
        <Nickname>{getNicknameTag()}</Nickname>
      </div>
    </Card>
  );
};

export default UserVideoComponent;
