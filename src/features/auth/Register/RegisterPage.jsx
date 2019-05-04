import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Form, Segment, Button, Label, Grid, Header, Message, Image } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate'
import TextInput from '../../../app/common/form/TextInput';
import { registerUser } from '../authActions'

const actions = {
  registerUser
}

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
})

const RegisterPage = ({handleSubmit, registerUser, error, invalid, submitting}) => {
  return (
    <Container className='main'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='red' textAlign='center'>
          <Image  src='assets/logo.png' /> 
           <p>Register to application</p>
        </Header>
        <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && <Label basic color='red'>{error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="red">
            Register
          </Button>
        </Segment>
      </Form>
        <Message>
          Do you have an account? <Link to='/login'>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </Container>
  );
};

export default connect(null,actions)(reduxForm({form: 'registerForm', validate})(RegisterPage));