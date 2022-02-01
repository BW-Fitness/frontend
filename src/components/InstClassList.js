import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Class from './Class';
import EditForm from './EditForm';
import AddForm from './AddForm';

const InstClassList = () => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState();
  const [classes, setClasses] = useState([
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
    }
  ]);

  useEffect(() => {
    axios.get('/url')
      .then(resp => {
        // setClasses(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleEdit = (selectedClass) => {
    axios.put(`/url`, selectedClass)
      .then(resp => {
        // setClasses(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleAdd = (selectedClass) => {
    axios.put(`/url`, selectedClass)
      .then(resp => {
        // setClasses(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleDelete = (id) => {
    axios.delete(`/url/${id}`)
      .then(resp => {
        // setClasses(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleEditSelect = (id) => {
    setEditing(true);
    setEditId(id);
  }

  const handleAddSelect = () => {
    setAdding(true);
  }

  const handleEditCancel = () => {
    setEditing(false);
  }

  const handleAddCancel = () => {
    setAdding(false);
  }

  return (
    <ClassList>
      <TitleWrapper>
        <Title>My Classes</Title>
      </TitleWrapper>
      <AddWrapper>
        {adding ? 
          <FormWrapper>
            <AddForm handleAdd={handleAdd} handleAddCancel={handleAddCancel} />
          </FormWrapper>
          : <AddButton onClick={handleAddSelect}>+ Add a Class</AddButton>
        }
      </AddWrapper>
      <ClassesWrapper>
        {classes.map(item => {
          return (
            <>
              <Class key={item.id} item={item} handleDelete={handleDelete} handleEditSelect={handleEditSelect} />
              {editing && <EditForm editId={editId} handleEdit={handleEdit} handleEditCancel={handleEditCancel} />}
              <ClassDivider></ClassDivider>
            </>
          )
        })}
      </ClassesWrapper>
    </ClassList>
  )
}

export default InstClassList;


// Styled Components

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

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
  padding: 2% 1%;
`;

const ClassesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2% 1%;
  background-color: #ececec;
`;

const ClassDivider = styled.div`
  width: 50%;
  border-bottom: 1px solid #c4c4c4;
  padding: 1%;
`;

const AddButton = styled.button`
  width: 15%;
  background-color: #fff;
  font-size: 1.1rem;
  margin: 1% 0;
  border: 3px solid #47ACFF;
  color: #47ACFF;
  padding: 1% 0;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2% 3%;
  border-radius: 7px;
`;