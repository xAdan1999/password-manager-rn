import { View, Text, TouchableOpacity } from 'react-native';
import { linkButton } from '../styles/styles';
import React from 'react';

const LinkButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={linkButton.linkLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

export default LinkButton