import React, { useState } from 'react';
import axios from 'axios';

const GHSearch = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');

  const searchUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    setUsers(response.data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchUser(text);
    setText('');
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <>
      <form data-cy='user-container' onSubmit={onSubmit}>
        <input
          data-cy='input-field'
          name='text'
          type='text'
          name='search-input'
          placeholder='Input GH username'
          value={text}
          onChange={onChange}
        />
        <input data-cy='search-button' type='submit' value='search' />
      </form> 
     
        <p>{users.login}</p>
        <p>{users.id}</p>
        <img src={users.avatar_url} alt='' />
    </>
  );
};

export default GHSearch;
