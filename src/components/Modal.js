import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Dimensions,
  ViewPropTypes,
} from 'react-native';
import {PropTypes} from 'prop-types';
import MyButton from '../components/MyButton';
import {WHITE_COLOR, PRIMARY_COLOR} from '../common/color';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    elevation: 8,
    width: width - 40,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  rightButton: {
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: WHITE_COLOR,
    marginLeft: 20,
  },
  rightButtonText: {
    color: PRIMARY_COLOR,
  },
  leftButton: {
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: PRIMARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1,
  },
});

const Modals = ({
  animationType,
  transparent,
  visible,
  title,
  titleStyle,
  buttonStyle,
  leftButtonText,
  leftButtonClick,
  rightButtonText,
  rightButtonClick,
}) => (
  <Modal
    animationType={animationType}
    transparent={transparent}
    visible={visible}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <View style={styles.buttonContainer}>
          {!!leftButtonText && (
            <MyButton
              style={[styles.leftButton, buttonStyle]}
              onPress={leftButtonClick}>
              {leftButtonText}
            </MyButton>
          )}
          {!!rightButtonText && (
            <MyButton
              style={[styles.rightButton, buttonStyle]}
              textStyle={styles.rightButtonText}
              onPress={rightButtonClick}>
              {rightButtonText}
            </MyButton>
          )}
        </View>
      </View>
    </View>
  </Modal>
);

Modals.defaultProps = {
  title: '',
  titleStyle: {},
  buttonStyle: {},
  leftButtonClick: () => {},
  rightButtonClick: () => {},
  leftButtonText: '',
  rightButtonText: '',
};

Modals.propTypes = {
  animationType: PropTypes.bool.isRequired,
  transparent: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  titleStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  leftButtonText: PropTypes.string,
  leftButtonClick: PropTypes.func,
  rightButtonText: PropTypes.string,
  rightButtonClick: PropTypes.func,
};

export default Modals;
