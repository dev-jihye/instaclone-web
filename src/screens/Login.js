import styled from 'styled-components';

export default function Login() {
  const Container = styled.div``;

  const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
  `;

  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
}
