import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  color: #4d85ee;
  &:hover {
    color: ${darken(0.1, '#4d85ee')};
  }
`;
