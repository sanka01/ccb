import React, { Component } from 'react';
import { Text } from 'react-native';

class StatusMusico extends Component {
  getStatusName(status) {
    switch (status) {
      case 0:
        return "Aluno";
      case 1:
        return "RJM";
      case 2:
        return "OF";
      case 3:
        return "NOF";
      default:
        return "Aluno";
    }
  }

  render() {
    const { status } = this.props;
    const statusName = this.getStatusName(status);

    return (
      <Text>{statusName}</Text>
    );
  }
}

export default StatusMusico;
