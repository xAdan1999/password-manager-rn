import { View, Text, TextInput, ToastAndroid } from 'react-native';
import { insertPassword } from '../services/PasswordService';
import CustomButton from '../components/CustomButton';
import { addPasswordStyles } from '../styles/styles';
import { colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const AddPasswordScreen = ({ navigation }) => {

  //estados
  const [title, setTitle] = useState('');
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [passwordToSave, setPasswordToSave] = useState('');

  //metodo para guardar
  const savePassword = async () => {

    //almacenar la respuesta        userId      
    const res = await insertPassword(1, title, usernameOrEmail, passwordToSave);

    //verificar si fue correcta
    if (res.success === true) {

      //mostrar el mensaje que arrojo el servidor
      ToastAndroid.showWithGravity(
        res.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );

      //regresar al home
      navigation.navigate('Passwords');
    }
    else{    

      //de lo contrario mostrar el mensaje de error que arrojo el servidor
      ToastAndroid.showWithGravity(
        res.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }

  return (
    <View style={addPasswordStyles.container}>

      {/*status bar*/}
      <StatusBar translucent backgroundColor='transparent' />

      {/*inputs*/}
      <View style={addPasswordStyles.sectionInputs}>
        <View>
          <Text style={addPasswordStyles.inputLabel}>Title</Text>
          <TextInput
            style={addPasswordStyles.inputEmail}
            placeholder='Enter a tittle'
            placeholderTextColor={colors.inputPlaceholder}
            selectionColor={colors.primary}
            value={title}
            onChangeText={title => setTitle(title)} />
        </View>
        <View>
          <Text style={addPasswordStyles.inputLabel}>Email or username</Text>
          <TextInput
            style={addPasswordStyles.inputEmail}
            placeholder='Enter an email or username'
            placeholderTextColor={colors.inputPlaceholder}
            selectionColor={colors.primary}
            value={usernameOrEmail}
            onChangeText={usernameOrEmail => setUsernameOrEmail(usernameOrEmail)} />
        </View>
        <View>
          <Text style={addPasswordStyles.inputLabel}>Password</Text>
          <TextInput
            style={addPasswordStyles.inputPassword}
            secureTextEntry={true}
            placeholder='Enter the password'
            placeholderTextColor={colors.inputPlaceholder}
            selectionColor={colors.primary}
            value={passwordToSave}
            onChangeText={passwordToSave => setPasswordToSave(passwordToSave)} />
        </View>
      </View>

      {/* para guardar una nueva contraseña */}
      <View styles={addPasswordStyles.sectionSave}>
        <CustomButton label={'Save'} onPress={savePassword} />
      </View>
    </View>
  );
}

export default AddPasswordScreen;