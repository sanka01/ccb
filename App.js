import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { Agenda } from './scr/view/Agenda';
import { CadastroMusico } from './scr/view/CadastroMusico';
import { Cidades } from './scr/view/Cidades';
import { EditarMusico } from './scr/view/EditarMusico';
import Home from './scr/view/Home';
import { QuadroComum } from './scr/view/QuadroComum';
import { QuadroGeral } from './scr/view/QuadroGeral';
import { QuadroGeralCidade } from './scr/view/QuadroGeralCidade';
import { Sobre } from './scr/view/Sobre';
import { TabelaMusicos } from './scr/view/TabelaMusicos';
import { TabelaMusicosCidade } from './scr/view/TabelaMusicosCidade';
import { LoginForm } from './scr/view/Login';

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      username: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
      this.setState({ isAuthenticated: true });
  }
  render() {

    const { isAuthenticated } = this.state;

    if (!isAuthenticated) {
      return (
       <LoginForm onLogin={this.handleLogin}/>
      )
    }
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
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="QuadroGeralCidade"
            component={QuadroGeralCidade}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="QuadroComum"
            component={QuadroComum}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="TabelaMusicos"
            component={TabelaMusicos}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="TabelaMusicosCidade"
            component={TabelaMusicosCidade}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="CadastroMusico"
            component={CadastroMusico}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="QuadroGeral"
            component={QuadroGeral}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="Agenda"
            component={Agenda}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: 'Quadro de Orquestra' }}
          />
          <Stack.Screen
            name="EditarMusico"
            component={EditarMusico}
            options={{ title: 'Quadro de Orquestra' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;


