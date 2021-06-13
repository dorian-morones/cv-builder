import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #1b1b1b;
  color #fff;
  width: 450px;
  height: calc(100vh - 44px);
  overflow-y: scroll;
  padding: 10px 0 0 0;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const FormTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: solid 1px gray;
  padding-bottom: 10px;
`

export const FormRow = styled.div`
  margin-bottom: 15px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
`;

export const FormColum = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  label{
    font-weight: 600;
    margin-bottom: 5px;
  }

  input, textarea{
    background-color: #292929;
    border-bottom: 0px;
    padding: 10px 5px;
    color: #fff;
  }
`;