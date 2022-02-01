import React, { useState } from 'react';
import styled from 'styled-components';

const initialClass = {
  id: '',
  name: '',
  type: '',
  start_time: '',
  duration: '',
  intensity: '',
  location: '',
  current_attendees: '',
  max_size: ''
}

const AddForm = (props) => {
  const [addingClass, setAddingClass] = useState(initialClass);
  const { handleAdd, handleAddCancel } = props;

  const handleChange = (e) => {
    setAddingClass({
      ...addingClass,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(addingClass);
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
        <input value='' name='name' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Type </label>
        <input value='' name='type' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Start Time </label>
        <input value='' name='startTime' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Duration </label>
        <input value='' name='duration' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Intensity </label>
        <input value='' name='intensity' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Location </label>
        <input value='' name='location' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Current Attendees </label>
        <input value='' name='currentAttendees' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Maximum Class Size </label>
        <input value='' name='maxSize' onChange={handleChange} />
      </InputWrapper>
      <SubButton onClick={handleSubmit}>Submit</SubButton>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
    </div>
  )
}

export default AddForm;

const InputWrapper = styled.div`
  margin: 1% 0;
`;

const SubButton = styled.button`
  width: 125px;
  padding: 1% 2%;
  margin: 2% 1%;
  border: none;
  background-color: #47ACFF;
  color: #fff;
  cursor: pointer;
`;

const CancelButton = styled.button`
  width: 125px;
  padding: 1% 2%;
  margin: 2% 1%;
  border: none;
  background-color: #D00000;
  color: #fff;
  cursor: pointer;
`;