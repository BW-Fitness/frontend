import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ClientCard from './ClientCard';
import Navbar from './Navbar';

const ClientClassList = () => {
  const [ classes, setClasses ] = useState([]);

  const user_id = localStorage.getItem('user_id');

  useEffect(()=>{
    if(user_id){
      axios
        .get(`https://localhost:9000/api/users/${user_id}/classes`)
        .then(resp => setClasses(resp.data))
        .catch(err => console.log(err, err.response));
    } else {
      console.log('User ID Not Found')
    }
  }, []);

  return (
  <div>
    <h2>The classes you are attending</h2>
    <ClientCard classes={classes}/>
  </div>
  );
}

export default ClientClassList;
