import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage  from '../../features/auth/Login/LoginPage'
import RegisterPage  from '../../features/auth/Register/RegisterPage'
import NavBar from '../../features/nav/NavBar/NavBar';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withFirebase } from 'react-redux-firebase'
import HomePage from '../../features/home/HomePage/HomePage';
import UserList from '../../features/user/UserList/UserList';
import UserProfile  from '../../features/user/UserProfile/UserProfile';

const mapToState = (state) => ({
  auth: state.firebase.auth,
})

class App extends Component {

  handleLogout = () => {
    this.props.firebase.logout();
    this.props.history.push('/register');
  }
  render() {
    const { auth } = this.props;
    const isLoggedIn = auth.isLoaded && !auth.isEmpty;

    return (
      <div>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
        </Switch>

        <Route 
          path="/(.+)"
          render ={() => (
            <div>
                {isLoggedIn && <NavBar logout={this.handleLogout} auth={auth} />}
                <Switch>
                  <Route path='/login' component={LoginPage}/>
                  <Route path='/register' component={RegisterPage}/>
                  <Route path='/dashboard/home' component={HomePage}/>
                  <Route path='/dashboard/user' component={UserList}/>
                  <Route path='/dashboard/profile/:id' component={UserProfile}/>
                </Switch>
            </div>
          )}
          />
      </div>

    );
  }
}

export default withRouter(withFirebase(connect(mapToState ,null)(App)));

