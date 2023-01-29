import React from 'react';
import { Text } from 'react-native';

const renderPessoa = ({ item }) => {
    let statusText
  let status = item.Status
  let nome = item.Nome
  switch (status) {
    case '0':
      statusText = 'Aluno';
      break;
    case '1':
      statusText = 'RJM';
      break;
    case '2':
      statusText = 'OF'
      break;
    case '3':
      statusText = 'NOF'
    default:
      statusText = 'Aluno';
  }

  return (
    <Text>
      {nome} - {statusText}
    </Text>
  );
  }

export default renderPessoa;
