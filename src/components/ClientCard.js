import React from "react";
import styled from "styled-components";

const ClientCard = (props) => {
  const{item, handleDelete, handleEditSelect} = props;

  return (
    <ClassWrapper>
      <CardContainer>
        <h1>{props.name}</h1>
        <p><b>Type:</b> {props.type}</p>
        <p><b>Start Time:</b> {props.start_time}</p>
        <p><b>Duration:</b> {props.duration}</p>
        <p><b>Intensity:</b> {props.intensity}</p>
        <p><b>Location:</b> {props.location}</p>
        <p><b>Current Attendees:</b> {props.current_attendees}</p>
        <p><b>Maximum Attendees Allowed:</b> {props.max_size}</p>
        <ButtonGroup>
          <DelButton onClick={() => {handleDelete(props.id)}}>Delete Class</DelButton>
        </ButtonGroup>
      </CardContainer>
    </ClassWrapper>
  )
}

export default ClientCard;

// Styled Components

const ClassWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2% 1%;
  background-color: #ececec;
`;

const CardContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% 2%;
  margin: 2%;
  box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.4);
  border-radius: 7px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DelButton = styled.button`
  width: 35%;
  font-size: 1.1rem;
  padding: 2% 1%;
  margin: 2% auto;
  border: none;
  background-color: #D00000;
  color: #fff;
  cursor: pointer;
`;
