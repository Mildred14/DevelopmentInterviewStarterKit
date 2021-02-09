import React from 'react';
import styled from 'styled-components';

const Table = styled.table.attrs({
  id: 'frecuency-chars'
})`
  border-collapse: collapse;
`

const TableData = styled.td`
  border: 1px solid #232E21;
  padding: 5px 10px;

`

const TableHead = styled.th`
  border: 1px solid #232E21;
  background-color: #88A2AA;
  padding: 5px 10px;
`

const FrecuencyChars = ({ chars }) => {
  const listOfChars = Object.entries(chars)

  const charsData = listOfChars.map(value => {
    return (
      <tr id={value[0]} key={value[0]}>
        <TableData>{value[0]}</TableData>
        <TableData>{value[1]}</TableData>
      </tr>
    )
  })

  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Character</TableHead>
          <TableHead>Count</TableHead>
        </tr>
      </thead>
      <tbody>
        {charsData}
      </tbody>
    </Table>
  )
}

export default FrecuencyChars
