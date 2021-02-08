import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
`

const TableData = styled.td`
  border: 1px solid #232E21;
  padding: 5px 10px;

`

const TableHead = styled.th.attrs({
  colSpan: "2"
})`
  border: 1px solid #232E21;
  background-color: #88A2AA;
  padding: 5px 10px;
`

const DuplicatedPeople = ({ duplicated }) => {
  const listOfDuplicated = Object.entries(duplicated)

  const duplicatedData = listOfDuplicated.map(value => {
    return (
      <tr key={value[1]}>
        <TableData>{value[0]}</TableData>
        <TableData>{value[1]}</TableData>
      </tr>
    )
  })

  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Posible duplicated person by email</TableHead>
        </tr>
        <tr>
          <th style={{border: '1px solid #232E21'}}>Email 1</th>
          <th style={{border: '1px solid #232E21'}}>Email 2</th>
        </tr>
      </thead>
      <tbody>
        {duplicatedData}
      </tbody>
    </Table>
  )
}

export default DuplicatedPeople
