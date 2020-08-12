import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { PropTypes } from 'prop-types';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton'
import locale from '../common/locale-en';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  welcome: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 26,
  }
});

const Menu = ({navigation}) => {
  const {welcomeText, enterName, namePlaceholder, start} = locale;
  
  const [name, setName] = useState('');

  const goToBoard = () => {
    navigation.navigate('Board');
  };

  return(
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : null}
      style={{ flex: 1 }}
    >
    <View style={styles.container}>
      <Text style={styles.welcome}>{welcomeText.toUpperCase()}</Text>
      <Text>{enterName}</Text>
      <MyTextInput
          style={styles.input}
          placeholder={namePlaceholder}
          value={name}
          onChangeText={setName}
          autoFocus
        />
      <MyButton onPress={goToBoard}>{start}</MyButton>
    </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Menu;
