import styled from "styled-components";

export const StyledForm = styled.form`
  display: "flex";
  flex-direction: "column";
  gap: "1rem";
  width: "100%";
  padding: 16px 24px;

  .form-group {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    > div {
      width: 100%;
      margin: 0;
    }
  }
`;
