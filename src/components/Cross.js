import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { PropTypes } from 'prop-types';
import { GRAY_COLOR } from '../common/color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 105,
  },
})

const Cross = ({ xTranslate, yTranslate, color }) => {
    return (
      <View style={[styles.container, {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10) + 35},
          {translateY: (yTranslate ? yTranslate : 10) - 12},
        ]
      }]}>
        <View style={[styles.line, {
          transform: [
            {rotate: '45deg'},
          ],
          backgroundColor: color
        }]} />
        <View style={[styles.line, {
          transform: [
            {rotate: '135deg'},
          ],
          backgroundColor: color
        }]} />
      </View>
    )
}

Cross.defaultProps = {
  xTranslate: 10,
  yTranslate: 10,
  color: GRAY_COLOR,
};

Cross.propTypes = {
  xTranslate: PropTypes.number,
  yTranslate: PropTypes.number,
  color: PropTypes.string,
};

export default Cross;