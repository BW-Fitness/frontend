import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const EditForm = (props) => {
  const [editingClass, setEditingClass] = useState(initialClass);
  const { handleEdit, handleEditCancel, editId } = props;

  useEffect(() => {
    axios.get(`/url/${editId}`)
      .then(resp => {
        // setEditingClass(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleChange = (e) => {
    setEditingClass({
      ...editingClass,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(editingClass);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    handleEditCancel();
  }

  return (
    <div>
      <h2>Edit {editingClass.name} Class</h2>
      <InputWrapper>
        <label>Name </label>
        <input value={editingClass.name} name='name' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Type </label>
        <input value={editingClass.type} name='type' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Start Time </label>
        <input value={editingClass.start_time} name='startTime' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Duration </label>
        <input value={editingClass.duration} name='duration' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Intensity </label>
        <input value={editingClass.intensity} name='intensity' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Location </label>
        <input value={editingClass.location} name='location' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Current Attendees </label>
        <input value={editingClass.current_attendees} name='currentAttendees' onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Maximum Class Size </label>
        <input value={editingClass.max_size} name='maxSize' onChange={handleChange} />
      </InputWrapper>
      <SubButton onClick={handleSubmit}>Submit</SubButton>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
    </div>
  )
}

export default EditForm;

const InputWrapper = styled.div`
  margin: 2.5% 0;
`;

const SubButton = styled.button`
  width: 100px;
  padding: 2% 1%;
  margin: 2% 1%;
  border: none;
  background-color: #47ACFF;
  color: #fff;
  cursor: pointer;
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 2% 1%;
  margin: 2% 1%;
  border: none;
  background-color: #D00000;
  color: #fff;
  cursor: pointer;
`;