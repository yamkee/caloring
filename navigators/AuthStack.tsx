import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../components/pages/auth/SignIn';
import SignUp from "../components/pages/auth/SignUp"

export default createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp
});
