import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import SpinnerMini from '../../ui/SpinnerMini';
import styled from 'styled-components';
import useLogin from './useLogin';

const StyledFormRow = styled(Form)`
  background-color: #ffffff;
`;

function LoginForm() {
  const [email, setEmail] = useState('marcin@test.com');
  const [password, setPassword] = useState('pass1234');

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <StyledFormRow onSubmit={handleSubmit}>
      <FormRow position="vertically" label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow position="vertically" label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Button size="large">{isLoading ? <SpinnerMini /> : 'Login'}</Button>
      </FormRow>
    </StyledFormRow>
  );
}

export default LoginForm;
