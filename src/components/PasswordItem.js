import { Text, TouchableOpacity } from 'react-native';
import { passwordItemStyles } from '../styles/styles';
import React from 'react';

const PasswordItem = ({ title, created, usernameOrEmail, onPress }) => {
    return (
        <TouchableOpacity style={passwordItemStyles.card} onPress={onPress}>
            <Text style={passwordItemStyles.title}>{title}</Text>
            <Text style={passwordItemStyles.usernameOrEmail}>{usernameOrEmail}</Text>
            <Text style={passwordItemStyles.created}>{created}</Text>
        </TouchableOpacity>
    );
}

export default PasswordItem