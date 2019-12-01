import {createStackNavigator} from 'react-navigation-stack';

import Home from '../components/pages/app/Home';
import Test from "../Test"

export default createStackNavigator({
  Test:Test,
  Home: Home,
});
