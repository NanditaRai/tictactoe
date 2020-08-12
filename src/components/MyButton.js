import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from 'react-native';
import { PropTypes } from 'prop-types';
import { PRIMARY_COLOR, WHITE_COLOR } from '../common/color';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  textStyle: {
    color: WHITE_COLOR,
    fontFamily: 'NunitoSans-Light',
  }
});

const MyButton = ({
  style,
  onPress,
  children,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  style: {},
  textStyle: {},
};

MyButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.string.isRequired,
  textStyle: ViewPropTypes.style,
};

export default MyButton;
