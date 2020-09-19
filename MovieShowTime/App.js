import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import MoviesList from './screens/MoviesList'
import MovieDetail from './screens/MovieDetail';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions = {
        {
          headerStyle: {
            backgroundColor: 'black',
            shadowOpacity: 0
          },
          headerTintColor: 'white'
        }
      }
      >
      <Stack.Screen
        name="MoviesList"
        options={
          {
            title: 'Movie Show Time Example'
          }
        }
        component={MoviesList}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={
          {
            title: null
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
