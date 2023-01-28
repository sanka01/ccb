import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import * as SQLite from 'expo-sqlite'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      nome: ""
    }
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists Pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, status INTEGER)'
      )
    })
    this.fetchData()
  }
  render() {
    return (
      <View style={Style.main}>
        <Text> TESTE DE TABELA DE PESSOAS</Text>
        <TouchableOpacity onPress={this.newItem} style={{backgroundColor: '#ff0', padding: 10}}>
          <Text >Nova pessoa</Text>
        </TouchableOpacity>
        <TextInput
            style={{height: 80, fontSize: 20}}
            placeholder="placeholder"
            onChangeText={(text) => this.state.nome = text}
            ref={input => { this.textInput = input }}
            returnKeyType="go"
          />

        <ScrollView  >
          {
            this.state.data && this.state.data.map(data =>
            (
              <View key={data.id}  >
                <Text>{data.nome} - {data.status}</Text> 

              </View>

            )
            )
          }
        </ScrollView>
      </View>
    )
  }

  fetchData = () => {
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql('SELECT * FROM Pessoas', null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => this.setState({ data: _array }),
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('Error ', error)
      ) // end executeSQL
    }) // end transaction
  }

  // event handler for new item creation
  newItem = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Pessoas (nome, status) values (?, ?)', [this.state.nome, 0],
        (txObj, resultSet) => this.setState({
          data: this.state.data.concat(
            { id: resultSet.insertId, nome: this.state.nome, status: 0 })
        }),
        (txObj, error) => console.log('Error', error))
    })
  }

  delete = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM Pessoas WHERE id = ? ', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let newList = this.state.data.filter(data => {
              if (data.id === id)
                return false
              else
                return true
            })
            this.setState({ data: newList })
          }
        })
    })
  }
}
export default App;
const Style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    backgroundColor: '#3BDB40'
  },
  white: {
    backgroundColor: '#fff'
  },
  widthfull: {
    width: '100%'
  },
  list: {

  }
});