import React from 'react';
// import { useDispatch } from 'react-redux';
// import { clicked } from '../../features/buttonClicked/buttonClickedSlice';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  // const dispatch = useDispatch();

  // const handleClick = () => dispatch(clicked());

  return (
    <Container>
      <Title>
        Title Login
        <small>Hello</small>
      </Title>
      <p>Lorem ipsum dolor sit</p>
      {/*       <button type="submit" onClick={handleClick}>
        Send
      </button> */}
    </Container>
  );
}
