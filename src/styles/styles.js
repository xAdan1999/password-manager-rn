import { colors } from '../constants/colors';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.background,
        padding: 20,
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: colors.inputBackground,
        borderColor: colors.inputBorder,
        borderWidth: 1,
        borderRadius: 7,
        paddingLeft: 15,
        color: colors.text,
    },
    label: {
        fontWeight: '500',
        color: colors.label
    },
    card: {
        backgroundColor: colors.card,
        borderRadius: 7,
        marginBottom: 8,
        padding: 15,
        borderWidth: 1,
        borderColor: colors.inputBorder
    }
});

//login
const loginStyles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sectionTitle: {
        marginBottom: 50
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text
    },
    label: {
        ...globalStyles.label,
    },
    sectionInputs: {
        marginBottom: 50
    },
    inputLabel: {
        ...globalStyles.label,
        marginBottom: 15
    },
    inputEmail: {
        ...globalStyles.input,
        marginBottom: 15
    },
    inputPassword: {
        ...globalStyles.input,
    },
    inputPasswordIcon:{
        position: 'absolute',
        right: 20
    },
    btnLogin: {
        marginBottom: 70
    },
    sectionLinkLabel: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//singup
const signupStyles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    sectionInputs: {
        marginTop: 30,
        marginBottom: 50
    },
    inputLabel: {
        ...globalStyles.label,
        marginBottom: 15
    },
    inputEmail: {
        ...globalStyles.input,
        marginBottom: 15,
    },
    inputPassword: {
        ...globalStyles.input,
        marginBottom: 15,
    },
    inputPasswordIcon:{
        position: 'absolute',
        right: 20
    },
    inputUsername: {
        ...globalStyles.input
    },
    sectionCreateAccount: {
        marginBottom: 70
    }
});

//passwords
const passwordsStyles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    sectionHeader: {
        marginTop: 40,
        marginBottom: 30
    },
    label: {
        ...globalStyles.label,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text
    },
    sectionSearch: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: colors.inputBackground,
        borderColor: colors.inputBorder,
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 26
    },
    sectionIcon: {
        justifyContent: 'center'
    },
    icon: {
        paddingHorizontal: 15
    },
    searchInput: {
        flex: 1,
        borderRadius: 7,
        color: colors.text,
        fontWeight: '500'
    },
    sectionItems: {
        marginBottom: 26
    }
});

//add password
const addPasswordStyles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    },
    label: {
        ...globalStyles.label,
        marginBottom: 15
    },
    sectionWebsites: {
        flexDirection: 'row',
        marginBottom: 15
    },
    dropdown: {
        ...globalStyles.input,
        flex: 1,
        marginRight: 15
    },
    sectionInputs: {
        marginTop: 30,
        marginBottom: 50
    },
    inputLabel: {
        ...globalStyles.label,
        marginBottom: 15
    },
    inputEmail: {
        ...globalStyles.input,
        marginBottom: 15
    },
    inputPassword: {
        ...globalStyles.input,
    },
    sectionSave: {
        marginBottom: 70
    },
});

//password details
const passwordDetailsStyles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    },
    sectionDelete: {
        flexDirection: 'row-reverse'
    },
    btnDelete: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 15
    },
    label: {
        ...globalStyles.label,
        marginBottom: 15
    },
    sectionWebsites: {
        flexDirection: 'row',
        marginBottom: 15
    },
    dropdown: {
        ...globalStyles.input,
        flex: 1,
        marginRight: 15
    },
    sectionInputs: {
        marginTop: 30,
        marginBottom: 15
    },
    inputLabel: {
        ...globalStyles.label,
        marginBottom: 15
    },
    inputEmail: {
        ...globalStyles.input,
        marginBottom: 15
    },
    inputPassword: {
        ...globalStyles.input,
        marginBottom: 15
    },
    inputPasswordIcon:{

    },
    inputCreated: {
        ...globalStyles.input,
        color: colors.label,
        marginBottom: 15
    },
    inputModified: {
        ...globalStyles.input,
        color: colors.label
    },
    sectionSave: {
        marginTop: 30
    }
});

//-COMPONENTS-----------------------------------------------------------

//custom button
const buttonStyles = StyleSheet.create({
    button: {
        height: 55,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    label: {
        color: colors.buttonText,
        marginHorizontal: 20,
        fontWeight: 'bold'
    }
});

//link button
const linkButton = StyleSheet.create({
    linkLabel: {
        marginLeft: 8,
        color: colors.primary,
        fontWeight: 'bold'
    }
});

//password item
const passwordItemStyles = StyleSheet.create({
    card: {
        ...globalStyles.card
    },
    title: {
        color: colors.text,
        fontWeight: 'bold',
        marginBottom: 2
    },
    created: {
        color: colors.label,
        fontSize: 11
    },
    usernameOrEmail: {
        color: colors.label,
        marginBottom: 2
    }
});

//floating button
const floatingButtonStyles = StyleSheet.create({
    floatingButton: {
        backgroundColor: colors.primary,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        right: 10,
        elevation: 5
    },
    floatingButtonText: {
        color: '#FFFFFF'
    }
});

export {
    loginStyles,
    signupStyles,
    passwordsStyles,
    addPasswordStyles,
    passwordDetailsStyles,
    buttonStyles,
    linkButton,
    passwordItemStyles,
    floatingButtonStyles,
}