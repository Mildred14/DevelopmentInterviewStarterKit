import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DuplicatedPeople from './DuplicatedPeople'
import FrecuencyChars from './FrecuencyChars'
import Person from './Person'

const Button = styled.button`
  background-color: #fff;
  border: 2px solid #88A2AA !important;
  border-radius: 5px;
  display: block;
  font-weight: bold;
  font-size: 14px;
  height:fit-content;
  margin: auto 25px auto 25px;
  padding: 5px 10px;
  width: 150px;
  &:hover {
    background-color: #88A2AA;
  }
  &:focus {
    outline: #88A2AA;
  }
`

const Table = styled.table.attrs({
  id: 'people-list'
})`
  border-collapse: collapse;
  margin: auto;
`

const TableRow = styled.tr`
  text-align: left;
`

const TableHead = styled.th`
  border: 1px solid #232E21;
  background-color: #88A2AA;
  padding: 5px 10px;
`

const Title = styled.h1`
  text-align: center;
`

const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
`

const People = () => {
  const [people, setPeople] = useState([])
  const [hashEmails, setHashEmails] = useState([])
  const [hashDuplicated, setHashDuplicated] = useState([])
  const [displayFrecuencyCount, setDisplayFrecuencyCount] = useState(false)
  const [displayDuplicated, setDisplayDuplicated] = useState(false)
  const emails = []
  people.map(person => emails.push(person.email))

  const counter = () => {
    const fullEmail = emails.join('')
    const chars = fullEmail.split('')
    const hash = {}
    chars.forEach((char) => {
      hash[char] = hash[char] ? hash[char] : 0
      hash[char]++
    })
    setHashEmails(hash)
    setDisplayFrecuencyCount(true)
  }

  const duplicatedEmails = () => {
    const userEmail = emails.map(email => email.split('@')[0])
    const hash = {}
    for (let i = 0; i < emails.length; i++) {
      for (let j = 0; j < emails.length; j++) {
        const rgx = new RegExp(userEmail[j], 'g')
        if (emails[i].match(rgx) && userEmail[i].length != userEmail[j].length) hash[emails[i]] = emails[j]
      }
    }
    setHashDuplicated(hash)
    setDisplayDuplicated(true)
  }

  useEffect(() => {
    axios.get('/api/people')
    .then( res => setPeople(res['data']))
    .catch( res => setPeople(res))
  }, [people.length])

  return (
    <div>
      <Title>SalesLoft</Title>
      <PeopleWrapper>
        <div>
          <h3>List of People</h3>
          <Table>
            <thead>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email address</TableHead>
                <TableHead>Job title</TableHead>
              </TableRow>
            </thead>

            <tbody>
              <Person people={people} />
            </tbody>
          </Table>
        </div>

        <div style={{margin: '0 25px'}}>
          <div style={{display: 'flex'}}>
            <h3>Frecuency count</h3>
            <Button onClick={counter}>Generate counter</Button>
          </div>

          {displayFrecuencyCount && <FrecuencyChars chars={hashEmails} />}
        </div>

        <div>
          <div style={{display: 'flex'}}>
            <h3>Possible duplicated</h3>
            <Button onClick={duplicatedEmails}>Generate duplicated</Button>
          </div>

          {displayDuplicated && <DuplicatedPeople duplicated={hashDuplicated}/>}
        </div>
      </PeopleWrapper>
    </div>
  )
}

export default People
