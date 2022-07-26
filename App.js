import { colors } from './src/constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PasswordsScreen from './src/screens/PasswordsScreen';
import AddPasswordScreen from './src/screens/AddPasswordScreen';
import PasswordDetailsScreen from './src/screens/PasswordDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          title: 'Sign up',
          headerShadowVisible: false,
          headerTintColor: colors.tintHeader,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name="Passwords" component={PasswordsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddPassword" component={AddPasswordScreen} options={{
          title: 'Add Password',
          headerShadowVisible: false,
          headerTintColor: colors.tintHeader,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name="PasswordDetails" component={PasswordDetailsScreen} options={{ 
            title: 'Password details',
            headerShadowVisible: false,
            headerTintColor: colors.tintHeader,
            headerStyle: {
              backgroundColor: colors.background
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

