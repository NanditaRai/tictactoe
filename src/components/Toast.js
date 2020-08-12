import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import { TOAST_BACKGROUND_COLOR } from '../common/color';

const styles = StyleSheet.create({
  toastBackground: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: TOAST_BACKGROUND_COLOR,
    borderRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  toastMessage: {
    fontSize: 12,
    color: 'white',
    flex: 3,
  },
});

const Toast = (props) => {
  const { toastMessage } = props;

  return (
    <View style={styles.toastBackground}>
      <Text style={styles.toastMessage}>{toastMessage}</Text>
    </View>
  );
};

Toast.propTypes = {
  toastMessage: string.isRequired,
};

export default Toast;
