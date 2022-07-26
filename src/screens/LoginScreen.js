import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from './../components/CustomButton';
import LinkButton from '../components/LinkButton';
import { login } from '../services/UserService';
import { loginStyles } from '../styles/styles';
import { colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {

  //estados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  //metodo para loguearse
  const signIn = async () => {

    //almacenar la respuesta
    const res = await login(email, password);

    //verificar dicha respuesta
    if (res.success === true) {

      //almacenar los datos de la sesion
      // storeData({
      //   userId: res.userId,
      //   username: res.username,
      //   token: res.token
      // });

      //mostrar un mensaje de que el usuario se logueo correctamente
      ToastAndroid.showWithGravity(
        res.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );

      //entrar a la pantalla de contraseñas
      navigation.navigate('Passwords');
    }
    else {

      //si la respuesta no devuelve un success en true, mostrar el error generado
      ToastAndroid.showWithGravity(
        res.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }

  //para almacenar la informacion del usuario y el token
  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', json)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={loginStyles.container}>

      <StatusBar translucent backgroundColor='transparent' />

      {/*title*/}
      <View style={loginStyles.sectionTitle}>
        <Text style={loginStyles.title}>Hello!</Text>
        <Text style={loginStyles.label}>Sign in to continue</Text>
      </View>

      {/*inputs*/}
      <View style={loginStyles.sectionInputs}>
        <View>
          <Text style={loginStyles.inputLabel}>Email</Text>
          <TextInput
            style={loginStyles.inputEmail}
            placeholder='Example@example.com'
            keyboardType='email-address'
            placeholderTextColor={colors.inputPlaceholder}
            selectionColor={colors.primary}
            value={email}
            onChangeText={email => setEmail(email)} />
        </View>
        <View>
          <Text style={loginStyles.inputLabel}>Password</Text>
          <View style={{ justifyContent: 'center' }}>
            <TextInput
              style={loginStyles.inputPassword}
              secureTextEntry={visible}
              placeholder='Enter your password'
              placeholderTextColor={colors.inputPlaceholder}
              selectionColor={colors.primary}
              value={password}
              onChangeText={password => setPassword(password)} />
            <TouchableOpacity style={loginStyles.inputPasswordIcon} onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}>
              <Icon name={show === false ? 'eye' : 'eye-off'} size={22} color={colors.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*button login*/}
      <View style={loginStyles.btnLogin}>
        <CustomButton label={'Login'} onPress={signIn} />
      </View>

      {/* create account link */}
      <View style={loginStyles.sectionLinkLabel}>
        <Text style={loginStyles.label}>Don't have an account?</Text>
        <LinkButton label={'Create'} onPress={() => { navigation.navigate('SignUp') }} />
      </View>
    </View>
  );
}

export default LoginScreen