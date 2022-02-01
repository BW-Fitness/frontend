import React from 'react';
import styled from 'styled-components';

const ClassList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-bottom: 7%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
`;

const Title = styled.h2`
  margin: 0 2%;
  padding: 3% 0;
`;

const ClassesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2% 1%;
  background-color: #ececec;
`;

const ClassCard = styled.div`
  width: 30%;
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

const Button = styled.button`
  width: 35%;
  font-size: 1.1rem;
  padding: 2% 1%;
  margin: 2% auto;
  border: none;
  background-color: #47ACFF;
  color: #fff;
  cursor: pointer;
`;

const AddButton = styled.button`
  width: 50%;
  background-color: #fff;
  font-size: 1.2rem;
  margin: 1% auto;
  border: 3px solid #47ACFF;
  color: #47ACFF;
  padding: 1% 0;
  cursor: pointer;
`;

const classes = [
  {
    id: 1,
    name: 'Kick Blaster',
    type: 'Kickboxing',
    start_time: '6:30 am',
    duration: '1 hour',
    intensity: 'high',
    location: 'zoom call',
    current_attendees: 12,
    max_size: 25
  },
  {
    id: 2,
    name: 'Zumba Stars',
    type: 'Zumba',
    start_time: '12:00 pm',
    duration: '45 minutes',
    intensity: 'low',
    location: 'The Studio!',
    current_attendees: 405,
    max_size: 500
  },
];

const InstClassList = () => {
  return (
    <ClassList>
      <TitleWrapper>
        <Title>My Classes</Title>
      </TitleWrapper>
      <ClassesWrapper>
        {classes.map(item => {
          return (
            <ClassCard key={item.id}>
              <h3>{item.name}</h3>
              <p><b>Type:</b> {item.type}</p>
              <p><b>Start Time:</b> {item.start_time}</p>
              <p><b>Duration:</b> {item.duration}</p>
              <p><b>Intensity:</b> {item.intensity}</p>
              <p><b>Location:</b> {item.location}</p>
              <p><b>Current Attendees:</b> {item.current_attendees}</p>
              <p><b>Maximum Attendees Allowed:</b> {item.max_size}</p>
              <div>
                <ButtonGroup>
                  <Button>Edit Class</Button>
                  <Button>Delete Class</Button>
                </ButtonGroup>
              </div>
            </ClassCard>
          )
        })}
      </ClassesWrapper>
      <AddButton>Add a Class</AddButton>
    </ClassList>
  )
}

export default InstClassList;