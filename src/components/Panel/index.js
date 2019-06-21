import React from 'react';

import {
  Container,
  Input,
  Nota,
  Title,
} from './styles';

export default function Panel() {
  return (
    <Container>
      <Nota>
        <Title>Nota 1</Title>
        <Input keyboardType="numeric" />
      </Nota>
      <Nota>
        <Title>Nota 2</Title>
        <Input keyboardType="numeric" />
      </Nota>
    </Container>
  );
}


