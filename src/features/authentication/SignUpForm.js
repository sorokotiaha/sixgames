import React, { useState, useContext } from 'react';
import { AuthenticationContext } from 'context/AuthenticationProvider';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const SignUpForm = () => {
  const { signUp } = useContext(AuthenticationContext);

  // TODO apply form via react-hook-form
  const [birthDate, setBirthName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // console.log(birthDate);
    // console.log(email);
    // console.log(password);
    signUp({username, password, birthDate});
  }

  return (
    <Form title="Sign up">
      <Input type="text" label="Username" placeholder="username" />
      <Input type="text" label="Password" placeholder="Password" />
      <Input type="text" label="Repeat password" placeholder="Repeat password" />
      <Input type="text" label="Birth date" placeholder="Birth date" />
      <Button label="Register" onClick={onSubmit} />
    </Form>
  )
}

export default SignUpForm;
