import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { renderPessoa } from './listarPessoa';
import {EXPO_PUBLIC_URL as URL} from '@env'

class ListarPessoas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pessoas: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getPessoas();
      }
      
      getPessoas = async () => {
        let url = URL + "selectall.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({ pessoas: data[0]['Rows'], loading: false })
        
      }

render(){
    return(
        <View style={{paddingTop: 20}}>
          {this.state.loading && <Text>Carregando...</Text>}
          {!this.state.loading && (
            <FlatList
              data={this.state.pessoas}
              renderItem={renderPessoa}
              keyExtractor={(item, index) => item.toString()}
            />
          )}
        </View>
    )
}

}
export default ListarPessoas;
