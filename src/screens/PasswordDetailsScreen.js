import { View, Text, TextInput, ToastAndroid, TouchableOpacity, Alert } from 'react-native';
import { updatePassword, deletePassword } from '../services/PasswordService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { passwordDetailsStyles } from '../styles/styles';
import CustomButton from '../components/CustomButton';
import { colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

const PasswordDetailsScreen = ({ navigation, route }) => {

    //estados
    const id = route.params.id;
    const [title, setTitle] = useState(route.params.title);
    const [usernameOrEmail, setUsernameOrEmail] = useState(route.params.usernameOrEmail);
    const [passwordToSave, setPasswordToSave] = useState(route.params.passwordToSave);
    const created = route.params.created;
    const modified = route.params.modified;

    //para mostrar el boton de eliminar
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <TouchableOpacity onPress={deleteCurrentPassword}>
                <Icon name='delete' size={24} color={colors.icon} />
            </TouchableOpacity>
        });
    });

    //metodo para actualizar
    const updateCurrentPassword = async () => {

        //almacenar la respuesta            
        const res = await updatePassword(id, title, usernameOrEmail, passwordToSave);

        //verificar si fue correcta
        if (res.success === true) {

            //mostrar el mensaje que arrojo el servidor
            ToastAndroid.showWithGravity(
                res.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );

            //regresar a la lista de contraseñas
            navigation.navigate('Passwords');
        }
        else {

            //de lo contrario mostrar el mensaje de error que arrojo el servidor
            ToastAndroid.showWithGravity(
                res.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }

    //metodo para eliminar
    const deleteCurrentPassword = () => {

        //mostrar una alerta
        Alert.alert(
            "Delete",
            "This item will be delete, are you sure?",
            [
                //para cancelar
                { text: "Cancel", style: "cancel" },
                {
                    //si se acepta eliminar
                    text: "OK", onPress: async () => {

                        //almacenar la respuesta            
                        const res = await deletePassword(id);

                        //verificar si fue correcta
                        if (res.success === true) {

                            //mostrar el mensaje que arrojo el servidor
                            ToastAndroid.showWithGravity(
                                res.message,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );

                            //regresar a la lista de contraseñas
                            navigation.navigate('Passwords');
                        }
                        else {

                            //de lo contrario mostrar el mensaje de error que arrojo el servidor
                            ToastAndroid.showWithGravity(
                                res.message,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );
                        }
                    }
                }
            ]
        );
    }

    return (
        <View style={passwordDetailsStyles.container}>

            {/*status bar*/}
            <StatusBar translucent backgroundColor='transparent' />

            {/*inputs*/}
            <View style={passwordDetailsStyles.sectionInputs}>
                <View>
                    <Text style={passwordDetailsStyles.inputLabel}>Title</Text>
                    <TextInput
                        style={passwordDetailsStyles.inputEmail}
                        placeholder='Enter a tittle'
                        placeholderTextColor={colors.inputPlaceholder}
                        selectionColor={colors.primary}
                        value={title}
                        onChangeText={title => setTitle(title)} />
                </View>
                <View>
                    <Text style={passwordDetailsStyles.inputLabel}>Email or username</Text>
                    <TextInput
                        style={passwordDetailsStyles.inputEmail}
                        placeholder='Enter an email or username'
                        placeholderTextColor={colors.inputPlaceholder}
                        selectionColor={colors.primary}
                        value={usernameOrEmail}
                        onChangeText={usernameOrEmail => setUsernameOrEmail(usernameOrEmail)} />
                </View>
                <View>
                    <Text style={passwordDetailsStyles.inputLabel}>Password</Text>
                    <TextInput
                        style={passwordDetailsStyles.inputPassword}
                        secureTextEntry={true}
                        placeholder='Enter the password'
                        placeholderTextColor={colors.inputPlaceholder}
                        selectionColor={colors.primary}
                        value={passwordToSave}
                        onChangeText={passwordToSave => setPasswordToSave(passwordToSave)} />
                </View>
                <View>
                    <Text style={passwordDetailsStyles.inputLabel}>Created</Text>
                    <TextInput
                        style={passwordDetailsStyles.inputCreated}
                        value={created}
                        editable={false} />
                </View>
                <View>
                    <Text style={passwordDetailsStyles.inputLabel}>Modified</Text>
                    <TextInput
                        style={passwordDetailsStyles.inputModified}
                        value={modified}
                        editable={false} />
                </View>
            </View>

            {/* para actualizar la contraseña */}
            <View style={passwordDetailsStyles.sectionSave}>
                <CustomButton label={'Update'} onPress={updateCurrentPassword} />
            </View>
        </View>
    );
}

export default PasswordDetailsScreen