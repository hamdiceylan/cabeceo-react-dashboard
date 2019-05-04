import React from 'react'
import { Grid, Segment, Item, Header } from 'semantic-ui-react'

const UserProfileHeader = ({user}) => {
  return (
    <Grid.Column width={16}>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image avatar size='small' src={user.photo}/>
                    <Item.Content verticalAlign='bottom'>
                        <Header as='h1'>{user.firstName} {user.lastName} ({user.isOnline ? 'online': 'offline'})</Header>
                        <br/>
                        <Header as='h3'>{user.username}</Header>
                        <br/>
                        <Header as='h3'>
                            {user.dancerRole}
                        </Header>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    </Grid.Column>
  )
}

export default UserProfileHeader
