import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CreateButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background-image: linear-gradient(to right, #7474BF 0%, #348AC7 51%, #7474BF 100%);
  transition: 1.5s;
  background-size: 200% auto;
  color: #FFF;
  box-shadow: 0 0 20px #eee;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  &:hover{
    background-position: right center;
  }

  &:focus{
    border: none;
  }

`
