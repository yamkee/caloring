import {createStackNavigator} from 'react-navigation-stack';

import Test from "../Test"
import Home from '../components/pages/app/Home';
import FriendList from "../components/pages/app/FriendsList"
import MyRecord from "../components/pages/app/MyRecord"
import Notifications from "../components/pages/app/Notifications"

export default createStackNavigator({
  Home,
  Test,
  FriendList,
  MyRecord,
  Notifications
});
