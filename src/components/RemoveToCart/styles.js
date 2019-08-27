import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';
import { darken, lighten } from 'polished';

const Button = styled.button`
  width: 100%;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  background-color: ${lighten(0.1, 'red')};
  border: none;

  &:hover {
    background-color: ${darken(0.1, 'red')};
  }

  ${Breakpoints.lg`
    margin: 0;
    padding: 0;
    color: red;
    background-color: transparent;

    &:hover {
      color: ${darken(0.1, 'red')};
      background-color: transparent;
    }
  `}
`;

export default Button;
