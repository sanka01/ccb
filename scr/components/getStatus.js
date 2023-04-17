import React, { Component } from 'react';
import { Text } from 'react-native';

class StatusMusico extends Component {
  getStatusName() {
    switch (this.props.status) {
      case '0':
        return "ALUNO";
      case '1':
        return "RJM";
      case '2':
        return "OFC";
      case '3':
        return "NOF";
      default:
        return "Aluno";
    }
  }

  render() {
    const statusName = this.getStatusName();

    return (
      <Text>Status: {statusName}</Text>
    );
  }
}

export default StatusMusico;
