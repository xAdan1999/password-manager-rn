import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/styles';

const CustomButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
            <Text style={buttonStyles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton


