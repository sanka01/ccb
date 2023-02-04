import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/view/Home';
import { Cidades } from './scr/view/Cidades';
import { QuadroGeralCidade } from './scr/view/QuadroGeralCidade';
import { TabelaMusicos } from './scr/view/TabelaMusicos';
import { CadastroMusico } from './scr/view/CadastroMusico';


const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="Cidades"
            component={Cidades}
            options={{title: 'Quadro de Orquestra'}}
          />
          <Stack.Screen
            name="QuadroGeralCidade"
            component={QuadroGeralCidade}
            options={{title: 'Quadro de Orquestra'}}
          />
          <Stack.Screen
            name="TabelaMusicos"
            component={TabelaMusicos}
            options={{title: 'Quadro de Orquestra'}}
          />
          <Stack.Screen
            name="CadastroMusico"
            component={CadastroMusico}
            options={{title: 'Quadro de Orquestra'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;


