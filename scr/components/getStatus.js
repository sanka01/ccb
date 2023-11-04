import React, { Component } from 'react';
import { Text } from 'react-native';

class StatusMusico extends Component {
  getStatusName() {
    switch (this.props.status) {
      case '0':
        return "AL-P";
      case '1':
        return "RJM";
      case '2':
        return "OFC";
      case '3':
          return "NOF";
      case '4':
        return "AL-I";
      case '5':
        return "AL-E";
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
