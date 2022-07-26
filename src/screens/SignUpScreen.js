import { View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from './../components/CustomButton';
import { signUp } from '../services/UserService';
import { signupStyles } from '../styles/styles';
import { colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {

    //states 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    //metodo para crear la cuenta
    const createAccount = async () => {

        //almacenar la respuesta
        const res = await signUp(email, password, username);

        //verificar si fue correcta
        if (res.success === true) {

            //almacenar los datos de la sesion
            // storeData({
            //   userId: res.userId,
            //   username: res.username,
            //   token: res.token
            // });

            //mostrar un mensaje de que el usuario se registro correctamente
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
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={signupStyles.container}>

            {/*status bar*/}
            <StatusBar translucent backgroundColor='transparent' />

            {/*inputs*/}
            <View style={signupStyles.sectionInputs}>
                <View>
                    <Text style={signupStyles.inputLabel}>Email</Text>
                    <TextInput
                        style={signupStyles.inputEmail}
                        placeholder='Example@example.com'
                        keyboardType='email-address'
                        placeholderTextColor={colors.inputPlaceholder}
                        selectionColor={colors.primary}
                        value={email}
                        onChangeText={email => setEmail(email)} />
                </View>
                <View>
                    <Text style={signupStyles.inputLabel}>Password</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <TextInput
                            style={signupStyles.inputPassword}
                            secureTextEntry={visible}
                            placeholder='Enter your password'
                            placeholderTextColor={colors.inputPlaceholder}
                            selectionColor={colors.primary}
                            value={password}
                            onChangeText={password => setPassword(password)} />
                        <TouchableOpacity style={signupStyles.inputPasswordIcon} onPress={() => {
                            setVisible(!visible);
                            setShow(!show);
                        }}>
                            <Icon name={show === false ? 'eye' : 'eye-off'} size={22} color={colors.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={signupStyles.inputLabel}>Username</Text>
                    <TextInput
                        style={signupStyles.inputUsername}
                        placeholder='Enter a username'
                        placeholderTextColor={colors.inputPlaceholder}
                        selectionColor={colors.primary}
                        value={username}
                        onChangeText={username => setUsername(username)} />
                </View>
            </View>

            {/* button create account */}
            <View style={signupStyles.sectionCreateAccount}>
                <CustomButton label={'Create account'} onPress={createAccount} />
            </View>

        </View>
    );
}

export default SignUpScreen