import React from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

export default function MyTable({data}) {
  const keys = Object.keys(data[0])

  return (
    <div>
      <Button className='my-3' variant="light">Add New User</Button>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            { keys.map( key => <th>{key}</th> ) }
          </tr>
        </thead>
        <tbody>
          { data.map( element => 
            <tr>
              { keys.map( key => <th>{element[key]}</th> ) }
            </tr> 
          )}
        </tbody>
      </Table>
    </div>
  )
}
