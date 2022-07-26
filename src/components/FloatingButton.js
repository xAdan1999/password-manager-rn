import { floatingButtonStyles } from '../styles/styles';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

const FloatingButton = ({ icon, onPress}) => {
  return (
    <TouchableOpacity style={floatingButtonStyles.floatingButton} onPress={onPress}>
        <Icon name={icon} size={22} color='#FFFFFF' />
    </TouchableOpacity>
  )
}

export default FloatingButton