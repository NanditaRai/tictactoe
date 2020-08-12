import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { PropTypes } from 'prop-types';
import { BLACK_COLOR, BOARD_BACKGROUND_COLOR } from '../common/color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  innerCircle: {
    backgroundColor: BOARD_BACKGROUND_COLOR,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
})

const Circle = ({xTranslate, yTranslate, color}) => {
    return (
      <View style={[styles.container, {
        transform: [
          {translateX: xTranslate},
          {translateY: yTranslate},
        ],
        backgroundColor: color
      }]}>
        <View style={styles.innerCircle}>
        </View>
      </View>
    )
}

Circle.defaultProps = {
  xTranslate: 10,
  yTranslate: 10,
  color: BLACK_COLOR,
};

Circle.propTypes = {
  xTranslate: PropTypes.number,
  yTranslate: PropTypes.number,
  color: PropTypes.string,
};

export default Circle;
