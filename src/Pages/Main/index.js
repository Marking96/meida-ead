import React, { useState } from 'react';

import Panel from '../../components/Panel';
import Resultado from '../../components/Resultado';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <Panel />
        <Resultado />
      </Container>
    </>
  );
}
