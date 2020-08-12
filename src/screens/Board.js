import React, { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native'
import { PropTypes } from 'prop-types';
import Circle from '../components/Circle'
import Cross from '../components/Cross'
import Modal from '../components/Modal'
import {
  CENTER_POINTS,
  AREAS,
  WINNING_CONDITIONS,
  RESULT_NONE,
  RESULT_USER,
  RESULT_COMPUTER,
  RESULT_TIE
} from '../common/constants'
import { BLACK_COLOR, PRIMARY_COLOR } from '../common/color';
import locale from '../common/locale-en';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: BLACK_COLOR
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: BLACK_COLOR,
    transform: [
      {translateX: 100}
    ]
  }
});

const Board = ({navigation}) => {
  const {playAgain} = locale;

  const [round, updateRound] = useState(0);
  const [computerInputs, updateComputerInputs] = useState([]);
  const [userInputs, updateUserInputs] = useState([]);
  const [result, updateResult] = useState(RESULT_NONE);
  const [isModalOpen, showModal] = useState(false);
  const [lastStepUser, updateLastStepUser] = useState(false);

  useEffect(() => {
    restart();
  }, [])

  const isWinner = inputs => {
    return WINNING_CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1))
  }

  const getResults = () => {
    const inputs = userInputs.concat(computerInputs);

    if (inputs.length >= 5 ) {
      let res = isWinner(userInputs)
      if (res && result !== RESULT_USER) {
        updateResult(RESULT_USER);
        showModal(true);
        return true;
      }
      res = isWinner(computerInputs)
      if (res && result !== RESULT_COMPUTER) {
        updateResult(RESULT_COMPUTER);
        showModal(true);
        return true;
      }
    }

    if (inputs.length === 9 &&
        result === RESULT_NONE && result !== RESULT_TIE) {
          updateResult(RESULT_TIE);
          showModal(true);
          return true;
    }
    return false;
  }

  useEffect(() => {
    let result = getResults();
    if(!result && lastStepUser){
      AIAction();
    }
  }, [userInputs, computerInputs, lastStepUser])

  const AIAction = () => {
    if (result !== RESULT_NONE) {
      return;
    }
    while(true) {
      const inputs = userInputs.concat(computerInputs)

      const randomNumber = Math.round(Math.random() * 8.3)
      if (inputs.every(d => d !== randomNumber)) {
        let cInputs = computerInputs.concat(randomNumber);
        updateComputerInputs(cInputs);
        updateLastStepUser(false);
        break;
      }
    }
  }

  const boardClickHandler = e => {
    const { locationX, locationY } = e.nativeEvent
    if (result !== RESULT_NONE) {
      return;
    }
    const inputs = userInputs.concat(computerInputs)

    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY))

      if (area && inputs.every(d => d !== area.id)) {
        let uInputs = userInputs.concat(area.id);
        updateUserInputs(uInputs);
        updateLastStepUser(true);
      }
  }

  const restart = () => {
    updateRound(round + 1);
    updateComputerInputs([]);
    updateResult(RESULT_NONE);
    updateUserInputs([]);

    setTimeout(() => {
      if (round % 2 === 0) {
        AIAction()
      }
    }, 5)
  }

  const getModalTitle = () => {
    switch (result) {
      case RESULT_USER:
        return 'You won the game!'
      case RESULT_COMPUTER:
        return 'Computer won the game!'
      case RESULT_TIE:
        return 'Tie!'
      default:
        return ''
    }
  }

  const dismissModal = () => {
    showModal(false);
    navigation.navigate('Menu');
  }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={e => boardClickHandler(e)}>
          <View style={styles.board}>
            <View
              style={styles.line}
            />
            <View
              style={[styles.line, {
                width: 3,
                height: 306,
                transform: [
                  {translateX: 200}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 100}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 200}
                ]
              }]}
            />
            {
              userInputs.map((d, i) => (
                <Circle
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                  color={PRIMARY_COLOR}
                />
              ))
            }
            {
              computerInputs.map((d, i) => (
                <Cross
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                  color={BLACK_COLOR}
                />
              ))
            }
          </View>
        </TouchableWithoutFeedback>
        <Modal
            animationType="none"
            transparent
            visible={isModalOpen}
            title={getModalTitle()}
            buttonText={playAgain}
            buttonClick={dismissModal}
          />
      </View>
    )
}

Board.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;