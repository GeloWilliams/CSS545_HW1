import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import BluePage from './screens/blue'
import RedPage from './screens/red';
import GreenPage from './screens/green';

const Stack = createStackNavigator();

const App = () => {
  return (
    // NavigationContainer handles navigation state and links navigator to the app
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BluePage">
      <Stack.Screen name="BluePage" component={BluePage} />
      <Stack.Screen name="RedPage" component={RedPage} />
      <Stack.Screen name="GreenPage" component={GreenPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;