import React from 'react';
import { StyleSheet, TextInput, ViewPropTypes } from 'react-native';
import { PropTypes } from 'prop-types';
import { PRIMARY_COLOR } from '../common/color';

const styles = StyleSheet.create({
  input: {
    width: '90%',
    padding: 8,
    paddingLeft: 0,
    margin: '5%',
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
  },
});

const MyTextInput = ({
  value, style, onChangeText, placeholder, autoFocus,
}) => {
  return (
    <TextInput
      autoFocus={autoFocus}
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

MyTextInput.defaultProps = {
  multiline: false,
  style: {},
  autoFocus: false,
};

MyTextInput.propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  onChangeText: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

export default MyTextInput;
