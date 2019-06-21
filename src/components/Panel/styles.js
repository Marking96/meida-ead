import styled from 'styled-components/native';

export const Container = styled.View `
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput `
  height: 40px;
  width: 150px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: #fff;
`;

export const Nota = styled.View `
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text `
  font-size: 40px;
  color: #fff;
  
`;
