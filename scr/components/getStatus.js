import React, { Component } from 'react';
import { Text } from 'react-native';

export const statusMusico = [
  {
    abr: 'AL-PRI',
    name: 'Aluno - Principiante',
  },
  {
    abr: 'AL-RJM',
    name: 'Aluno - Reunião de Jovens e Menores',
  },
  {
    abr: 'OFICIAL',
    name: 'Oficializado',
  },
  {
    abr: 'AL-COF',
    name: 'Aluno - Culto Oficial',
  },
  {
    abr: 'AL-INS',
    name: 'Aluno - Com Instrumento',
  },
  {
    abr: 'AL-ENS',
    name: 'Aluno - Ensaio',
  },
]
statusMusico.default = {
  abr: 'Aluno',
  name: 'Aluno',
}

class StatusMusico extends Component {
  getStatusNameAbr() {
    return statusMusico[this.props.status]?.abr || statusMusico.default.abr
  }
  getStatusName(){
    return statusMusico[this.props.status]?.name || statusMusico.default.name
  }

  render() {
    const statusName = this.getStatusNameAbr();

    return (
      <Text>Status: {statusName}</Text>
    );
  }
}

export default StatusMusico;
