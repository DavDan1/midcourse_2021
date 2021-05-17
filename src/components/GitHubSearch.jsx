import React, {useState} from 'react'
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  const [search, setSearch] = useState()

  return (
    <>
      <Input data-cy='input-field' type="text" name="search" placeholder="Input GH username"/>
      <Button data-cy='search-button' name="search">Search</Button>
    </>
  )
}

export default GHSearch