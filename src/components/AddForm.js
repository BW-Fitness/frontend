import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addClass } from '../actions';

const AddForm = (props, { dispatch}) => {
  const { handleAddCancel } = props;
  const [state, setState] = useState({
    id: '',
    name: '',
    type: '',
    start_time: '',
    duration: '',
    intensity: '',
    location: '',
    current_attendees: '',
    max_size: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClass({
      id: state.id,
      name: state.name,
      type: state.type,
      start_time: state.start_time,
      duration: state.duration,
      intensity: state.intensity,
      location: state.location,
      current_attendees: state.current_attendees,
      max_size: state.max_size
    }));
  }

  const handleCancel = (e) => {
    e.preventDefault();
    handleAddCancel();
  }

  return (
    <div>
      <h2>Add A Class</h2>
      <InputWrapper>
        <label>Name </label>
        <input value={state.name} name='name' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Type </label>
        <input value={state.type} name='type' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Start Time </label>
        <input value={state.start_time} name='startTime' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Duration </label>
        <input value={state.duration} name='duration' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Intensity </label>
        <input value={state.intensity} name='intensity' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Location </label>
        <input value={state.location} name='location' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Current Attendees </label>
        <input value={state.current_attendees} name='currentAttendees' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Maximum Class Size </label>
        <input value={state.max_size} name='maxSize' onChange={handleChange} />
      </InputWrapper>
      <SubButton onClick={handleSubmit}>Submit</SubButton>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
    </div>
  )
}

export default connect()(AddForm);

const InputWrapper = styled.div`
  margin: 4% 0;
`;

const SubButton = styled.button`
  width: 125px;
  padding: 3% 2%;
  margin: 5% 1%;
  border: none;
  background-color: #47ACFF;
  color: #fff;
  cursor: pointer;
`;

const CancelButton = styled.button`
  width: 125px;
  padding: 3% 2%;
  margin: 5% 1%;
  border: none;
  background-color: #D00000;
  color: #fff;
  cursor: pointer;
`;