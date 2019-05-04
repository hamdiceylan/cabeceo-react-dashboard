import React, { Component } from 'react'
import { Container, Card, Header, Grid, Table } from 'semantic-ui-react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header as='h2'>
            Dashboard home page
            <Header.Subheader>You can see important numbers here.</Header.Subheader>
          </Header>
          <Grid stackable>
            <Grid.Column width={4}>
              <Card>
                <Card.Content>
                  <Header style={{textAlign : 'center', color: 'red'}} as='h1'> 1</Header>
                  <Card.Header style={{textAlign : 'center'}} content='Active Users' />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Card.Content>
                  <Header style={{textAlign : 'center'}} as='h1'> 1</Header>
                  <Card.Header style={{textAlign : 'center'}} content='User registered today' />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Card.Content>
                  <Header style={{textAlign : 'center'}} as='h1'> 1</Header>
                  <Card.Header style={{textAlign : 'center'}} content='Messages sent today' />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Card.Content>
                  <Header style={{textAlign : 'center'}} as='h1'> 12</Header>
                  <Card.Header  style={{textAlign : 'center'}} content='Couples danced today' />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Table compact celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell>Registration Count</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Italy</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>United Stated</Table.Cell>
                    <Table.Cell>9</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Turkey</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>United Kingdom</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>            
            <Grid.Column width={8}>
              <Table compact celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Registration Count</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Rome</Table.Cell>
                    <Table.Cell>11</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>New York</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Istanbul</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>London</Table.Cell>
                    <Table.Cell>2</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={16}>
              {/* <LiveFeed/> */}
            </Grid.Column>


          </Grid>
          <h3>
          <br/>Son Yapilacaklar<br/>

          - Report for aggregated location information - city/country<br/>
          - Report for number of active, registered, user. Realtime-Daily<br/>
          - Report for number of leader/follower -registered, active<br/>
          - Report for dance request& acceptance, ratio <br/>
          - Report for daily text/message<br/>


          User Problem solve icin:<br/>
          User resetleme<br/>
          User silme<br/>
          Mesaj silme<br/>
          User datasi export etme( userlarin location, email, roll)<br/>
          Manuel user yaratma<br/>
          Bulk user yaratma<br/>
          Bulk user silme<br/>
          </h3>
        </Container>
      </div>
    )
  }
}

export default HomePage
