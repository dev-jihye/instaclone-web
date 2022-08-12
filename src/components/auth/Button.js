import styled from 'styled-components';

const SButton = styled.input`
  border: none;
  margin-top: 12px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
`;

export default function Button(props) {
  return <SButton {...props} />;
}
