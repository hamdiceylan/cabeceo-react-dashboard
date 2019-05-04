import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Grid, Header, Form, Segment, Button, Label, Message, Image } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { login } from '../authActions'

const actions = {
    login
}

const mapState = (state) => ({
  auth: state.firebase.auth,
})

export class LoginPage extends Component {
  render() {
    const {login, handleSubmit, error, auth} = this.props;
    const isAuthenticated = auth.isLoaded && !auth.isEmpty;

    if(isAuthenticated) this.props.history.push('/dashboard/home');

    return (
      <Container className='main'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='red' textAlign='center'>
            <Image style={{height:'100px', width: '100px'}} src='assets/logo.png' />
            <p>Log-in to your account</p>
            </Header>
            <Form error size="large" onSubmit={handleSubmit(login)}>
              <Segment>
                <Field
                  name="email"
                  component={TextInput}
                  type="text"
                  placeholder="Email Address"
                />
                <Field
                  name="password"
                  component={TextInput}
                  type="password"
                  placeholder="password"
                />
                {error && <Label basic color='red'>{error}</Label>}
                <Button fluid size="large" color="red">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/register'>Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapState,actions)(reduxForm({form: 'loginForm'})(LoginPage));
