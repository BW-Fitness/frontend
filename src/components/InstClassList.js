import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
  background-color: #c4c4c4;
`;

const Title = styled.h2`
  color: #fff;
`;

const ClassesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ececec;
  padding: 2% 1%;
`;

const ClassCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 6%;
  margin: 2%;
  box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.4);
  border-radius: 7px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const classes = [
  {
    id: Date.now(),
    name: 'Kick Blaster',
    type: 'Kickboxing',
    start_time: '6:30 am',
    duration: '1 hour',
    intensity: 'high',
    location: 'zoom call',
    current_attendees: 12,
    max_size: 25
  },
];

const InstClassList = () => {
  return (
    <div className='classlist-cont'>
      <TitleWrapper>
        <Title>My Classes</Title>
      </TitleWrapper>
      <ClassesWrapper>
        {classes.map(item => {
          return (
            <ClassCard key={item.id}>
              <h3>{item.name}</h3>
              <p>Type: {item.type}</p>
              <p>Start Time: {item.start_time}</p>
              <p>Duration: {item.duration}</p>
              <p>Intensity: {item.intensity}</p>
              <p>Location: {item.location}</p>
              <p>Current Attendees: {item.current_attendees}</p>
              <p>Maximum Attendees Allowed: {item.max_size}</p>
              <div>
                <ButtonGroup>
                  <button>Edit Class</button>
                  <button>Delete Class</button>
                </ButtonGroup>
              </div>
            </ClassCard>
          )
        })}
        <button>Add a Class</button>
      </ClassesWrapper>
    </div>
  )
}

export default InstClassList;