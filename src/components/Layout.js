import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
  max-width: 930px;
  width: 100%;
  margin: 0 auto;
  margin-top: 45px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
