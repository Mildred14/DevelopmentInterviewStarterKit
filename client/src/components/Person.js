import React from 'react';
import styled from 'styled-components';

const TableData = styled.td`
  border: 1px solid #232E21;
  padding: 5px 10px;

`

const Person = ({ people }) => {
  const list = people.map( person => {
    const { email, id, job, name } = person

    return (
      <tr key={id}>
        <TableData>{name}</TableData>
        <TableData>{email}</TableData>
        <TableData>{job}</TableData>
      </tr>
    )
  })

  return list
}

export default Person
