import React, { Component } from 'react';
import { Text } from 'react-native';
import StatusMusico from './getStatus';

export const renderPessoa = ({ item }) => {
  const nome = item.nome_pessoa;
  const status = parseInt(item.Status);

  return (
    <Text>
      {nome} - <StatusMusico status={status} />
    </Text>
  );
}
