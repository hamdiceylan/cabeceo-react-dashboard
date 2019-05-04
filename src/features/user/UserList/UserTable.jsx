import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserTable = ({users}) => (
  <Table compact celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Name</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {users && users.length > 0 && users.map(user => (
        <Table.Row key={user.id}>
          <Table.Cell> 
            <Link to={`/dashboard/profile/${user.id}`}>{user.username}</Link>
          </Table.Cell>
          <Table.Cell>{user.dancerRole}</Table.Cell>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell colSpan='5'>
          <Button floated='right' icon labelPosition='left' primary size='small'>
            <Icon name='user' /> Add User
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default UserTable