import React from "react";
import styled from "styled-components";

const Class = (props) => {
  const{item, handleDelete, handleEditSelect} = props;

  return (
    <ClassWrapper>
      <CardContainer>
        <h1>{item.name}</h1>
        <p><b>Type:</b> {item.type}</p>
        <p><b>Start Time:</b> {item.start_time}</p>
        <p><b>Duration:</b> {item.duration}</p>
        <p><b>Intensity:</b> {item.intensity}</p>
        <p><b>Location:</b> {item.location}</p>
        <p><b>Current Attendees:</b> {item.current_attendees}</p>
        <p><b>Maximum Attendees Allowed:</b> {item.max_size}</p>
        <ButtonGroup>
          <EditButton onClick={() => {handleEditSelect(item.id)}}>Edit Class</EditButton>
          <DelButton onClick={() => {handleDelete(item.id)}}>Delete Class</DelButton>
        </ButtonGroup>
      </CardContainer>
    </ClassWrapper>
  )
}

export default Class;

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

const EditButton = styled.button`
  width: 35%;
  font-size: 1.1rem;
  padding: 2% 1%;
  margin: 2% auto;
  border: none;
  background-color: #47ACFF;
  color: #fff;
  cursor: pointer;
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