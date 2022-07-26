//url
const url = 'http://192.168.0.22:3000/api/users';

//para registrarse
export const signUp = async (email, password, username) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, username })
        };
        const response = await fetch(url + '/signup', requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//para loguearse
export const login = async (email, password) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };
        const response = await fetch(url + '/login', requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};