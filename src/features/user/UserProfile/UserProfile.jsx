import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase'
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment, Container} from "semantic-ui-react";
import UserProfileHeader from './UserProfileHeader'


const mapState = (state) => {
    let user = {};
  
    return {
      user,
      auth: state.firebase.auth
     }
  }
  
  const actions = {}

class UserProfile extends Component {
    state = {
        user: {}
    }

    async componentDidMount(){
        const {firestore, match} = this.props;
        let user = await firestore.get(`users/${match.params.id}`);
        if(user.exists){
            this.setState({
                user: user.data()
            });
            console.log(user.data());
        } else {
            this.props.history.push('/error');
        }
        await firestore.setListener(`users/${match.params.id}`);
    }

    async componentWillUnmount(){
        const {firestore, match} = this.props;
        await firestore.unsetListener(`users/${match.params.id}`);
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                Email is :{user.email}
                <Container>
                    <Grid stackable>
                        <UserProfileHeader user={user} />
                        <Grid.Column width={12}>
                            <Segment>
                                <Grid columns={2}>
                                    <Grid.Column width={10}>
                                        <Header icon='smile' content='About Display Name'/>
                                        <p>I am a: <strong>Occupation Placeholder</strong></p>
                                        <p>Originally from <strong>United Kingdom</strong></p>
                                        <p>Member Since: <strong>28th March 2018</strong></p>
                                        <p>Description of user</p>

                                    </Grid.Column>
                                    <Grid.Column width={6}>

                                        <Header icon='heart outline' content='Interests'/>
                                        <List>
                                            <Item>
                                                <Icon name='heart'/>
                                                <Item.Content>Interest 1</Item.Content>
                                            </Item>
                                            <Item>
                                                <Icon name='heart'/>
                                                <Item.Content>Interest 2</Item.Content>
                                            </Item>
                                            <Item>
                                                <Icon name='heart'/>
                                                <Item.Content>Interest 3</Item.Content>
                                            </Item>
                                        </List>
                                    </Grid.Column>
                                </Grid>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Segment>
                                <Button color='red' fluid basic content='Edit Profile'/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Segment attached>
                                <Header icon='image' content='Photos'/>
                                <Image.Group size='small'>
                                    <Image src='https://randomuser.me/api/portraits/women/22.jpg'/>
                                    <Image src='https://randomuser.me/api/portraits/women/31.jpg'/>
                                    <Image src='https://randomuser.me/api/portraits/women/28.jpg'/>
                                    <Image src='https://randomuser.me/api/portraits/women/11.jpg'/>
                                </Image.Group>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Segment attached>
                                <Header icon='calendar' content='Dance History'/>
                                <Menu secondary pointing>
                                    <Menu.Item name='All Dances' active/>
                                    <Menu.Item name='Invitations sent'/>
                                    <Menu.Item name='Received Invitations'/>
                                    <Menu.Item name='Messages'/>
                                </Menu>

                                <Card.Group itemsPerRow={5}>

                                    <Card>
                                        <Image src={'/assets/categoryImages/drinks.jpg'}/>
                                        <Card.Content>
                                            <Card.Header textAlign='center'>
                                                Event Title
                                            </Card.Header>
                                            <Card.Meta textAlign='center'>
                                                28th March 2018 at 10:00 PM
                                            </Card.Meta>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Image src={'/assets/categoryImages/drinks.jpg'}/>
                                        <Card.Content>
                                            <Card.Header textAlign='center'>
                                                Event Title
                                            </Card.Header>
                                            <Card.Meta textAlign='center'>
                                                28th March 2018 at 10:00 PM
                                            </Card.Meta>
                                        </Card.Content>
                                    </Card>

                                </Card.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withFirestore(connect(mapState,actions)(UserProfile))
