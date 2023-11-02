import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Form = styled.form`
  // color: ${(props) => (props.isRed ? 'red' : 'blue')};
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      transition: all 300ms;
    }
  }
`;
