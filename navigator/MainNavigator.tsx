import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthLoading from '../components/pages/auth/AuthLoading';

const MainNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  App: AppStack,
  Auth: AuthStack,
});

export default createAppContainer(MainNavigator);
