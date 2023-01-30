import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/view/Home';
import { Teste } from './scr/view/Teste';


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
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Teste"
            component={Teste}
            options={{title: 'Teste'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;


