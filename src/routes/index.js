import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PRIMARY_COLOR, WHITE_COLOR } from '../common/color';
import Menu from '../screens/Menu';
import Board from '../screens/Board';

const headerStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: WHITE_COLOR,
};

const AppNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
      ...headerStyle,
    }),
  },
  Board: {
    screen: Board,
    navigationOptions: () => ({
      ...headerStyle,
    }),
  }
})

export default createAppContainer(AppNavigator);