import styled from "styled-components";
import { Input } from "antd";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  label {
    font-size: 1rem;
    padding: 0.1rem;
  }
`;
export const StyledInput = styled(Input)`
  & .ant-input-suffix {
    font-size: 1.1rem;
  }
`;
