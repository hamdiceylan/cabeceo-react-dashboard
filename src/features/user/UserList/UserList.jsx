import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Header } from 'semantic-ui-react';
import UserTable from './UserTable';
import { getUsers }  from '../userActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const actions = {
  getUsers
}

const mapState = (state) => ({
  users: state.users,
  loading: state.async.loading
})

export class UserList extends Component {
  async componentDidMount(){
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users !== nextProps.users) {
      this.setState({
        users: nextProps.users
      })
    }
  }
  render() {
    const {users, loading} = this.props;
    return (
      <div>
        {loading && <LoadingComponent inverted={true} />}
        <Container>
          <Header as='h2'>
            Active User List
            <Header.Subheader>Manage your users and view user profile details</Header.Subheader>
          </Header>
          <UserTable users={users} />
        </Container>
      </div>
    )
  }
}


export default  connect(mapState,actions)(
  firestoreConnect([{collection: 'users'}])(UserList)
);
