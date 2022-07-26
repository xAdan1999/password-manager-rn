//para traer el token
import AsyncStorage from '@react-native-async-storage/async-storage';

//url
const url = 'http://192.168.0.22:3000/api/passwords';

//para obtener todos las contraseñas
export const getPasswords = async () => {
    try {
        //const value = await AsyncStorage.getItem('@storage_Key');
        const requestOptions = {
            method: 'GET',
            //headers: { 'Authorization': value }
        }
        const response = await fetch(url + '/' + 1, requestOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error); 
    }
};

//para buscar una contraseñ
export const searchPassword = async (userId ,title) => {
    try {
        //const value = await AsyncStorage.getItem('@storage_Key');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': value
            },
            body: JSON.stringify({ title })
        };
        const response = await fetch(url + '/' + 1, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//para insertar una nueva contraseña
export const insertPassword = async (userId, title, usernameOrEmail, passwordToSave) => {
    try {
        //const value = await AsyncStorage.getItem('@storage_Key');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': value
            },
            body: JSON.stringify({ userId, title, usernameOrEmail, passwordToSave })
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//para actualizar una nueva contraseña
export const updatePassword = async (id, title, usernameOrEmail, passwordToSave) => {
    try {
        //const value = await AsyncStorage.getItem('@storage_Key');
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': value
            },
            body: JSON.stringify({ title, usernameOrEmail, passwordToSave })
        };
        const response = await fetch(url + '/' + id, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//para eliminar una contraseña
export const deletePassword = async (id) => {
    try {
        //const value = await AsyncStorage.getItem('@storage_Key');
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': value
            }
        };
        const response = await fetch(url + '/' + id, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};