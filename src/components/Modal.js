import React from 'react';
import {
  Text, View, StyleSheet, Modal, Dimensions, ViewPropTypes,
} from 'react-native';
import { PropTypes } from 'prop-types';
import MyButton from '../components/MyButton';
import {
  PRIMARY_COLOR,
  WHITE_TEXT_COLOR,
} from '../common/color';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 8,
    width: width - 40,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
});

const Modals = ({
  animationType,
  transparent,
  visible,
  title,
  titleStyle,
  buttonText,
  buttonClick,
  buttonStyle,
}) => (
  <Modal
    animationType={animationType}
    transparent={transparent}
    visible={visible}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {!!buttonText && (
          <MyButton onPress={buttonClick}>
            {buttonText}
          </MyButton>  
        )}
      </View>
    </View>
  </Modal>
);

Modals.defaultProps = {
  title: '',
  titleStyle: {},
  buttonClick: () => {},
  buttonText: '',
  buttonStyle: {},
};

Modals.propTypes = {
  animationType: PropTypes.bool.isRequired,
  transparent: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  titleStyle: ViewPropTypes.style,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func,
  buttonStyle: ViewPropTypes.style,
};

export default Modals;
