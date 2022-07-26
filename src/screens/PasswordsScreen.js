import { View, Text, FlatList, TextInput, ToastAndroid, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPasswords } from '../services/PasswordService';
import FloatingButton from '../components/FloatingButton';
import PasswordItem from '../components/PasswordItem';
import Icon from 'react-native-vector-icons/Feather';
import { passwordsStyles } from '../styles/styles';
import { colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const PasswordsScreen = ({ navigation }) => {

  //estados
  const [passwords, setPasswords] = useState([]);
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);

  //realizar un conteo
  const items = passwords.length;

  //obtener las contraseñas
  const getAll = async () => {
    const data = await getPasswords();
    setPasswords(data);
    setFilteredPasswords(data);
  }

  //funcion que se ejecuta cada vez que esta pantalla es cargada
  useEffect(() => {
    getAll();
  }, []);

  //metodo para refrescar la lista
  const refreshList = React.useCallback(async () => {
    setRefresh(true);
    await getAll();
    setRefresh(false);
  });

  //para traer el username del usuario
  // const getUser = async () => {
  //   try {
  //     const userData = JSON.parse(await AsyncStorage.getItem("@storage_Key"));
  //     console.log(userData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const remove = async () => {
  //   await AsyncStorage.clear();
  // }

  return (
    <View style={passwordsStyles.container}>

      <StatusBar translucent backgroundColor='transparent' />

      {/*header*/}
      <View style={passwordsStyles.sectionHeader}>
        <Text style={passwordsStyles.label}>Welcome!</Text>
        <Text style={passwordsStyles.username}>Adan99</Text>
      </View>

      {/*search*/}
      <View style={passwordsStyles.sectionSearch}>
        <View style={passwordsStyles.sectionIcon}>
          <Icon style={passwordsStyles.icon} name="search" size={17} color={colors.iconSearch} />
        </View>
        <TextInput
          icon
          style={passwordsStyles.searchInput}
          placeholder='Search'
          placeholderTextColor={colors.inputPlaceholder}
          selectionColor={colors.primary}
          value={search}
          onChangeText={search => setSearch(search)} />
      </View>

      {/*items*/}
      <View style={passwordsStyles.sectionItems}>
        <Text style={passwordsStyles.label}>{items} items</Text>
      </View>

      {/*flatlist*/}
      <FlatList
        data={passwords}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={refreshList}
            colors={[colors.primary]}
            progressBackgroundColor={colors.card} />}

        renderItem={({ item }) => {
          return <PasswordItem title={item.title} created={item.created} usernameOrEmail={item.usernameOrEmail} onPress={() => {
            navigation.navigate('PasswordDetails', {
              id: item.id,
              title: item.title,
              usernameOrEmail: item.usernameOrEmail,
              passwordToSave: item.passwordToSave,
              created: item.created,
              modified: item.modified,
            });
          }} />
        }}
        keyExtractor={item => item.id.toString()} />

      {/*para añadir una nueva contraseña*/}
      <FloatingButton icon='plus' onPress={() => { navigation.navigate('AddPassword') }} />

    </View>
  );
}

export default PasswordsScreen