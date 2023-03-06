import React, { useState, useContext } from 'react';
import { AuthenticationContext } from 'context/AuthenticationProvider';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const LogInForm = () => {
  const { logIn } = useContext(AuthenticationContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    // console.log(birthDate);
    // console.log(email);
    // console.log(password);
    logIn({username, password});
  }

  return (
    <Form title="Log in">
      <Input type="text" label="Username" placeholder="Username" />
      <Input type="text" label="Password" placeholder="Password" />
      <Button label="Login" onClick={onSubmit} />
    </Form>
  )
}

export default LogInForm;
