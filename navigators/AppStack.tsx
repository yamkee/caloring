import { createStackNavigator } from 'react-navigation-stack'

import Home from '../components/screens/app/Home'
import FriendList from '../components/screens/app/FriendsList'
import MyRecord from '../components/screens/app/MyRecord'
import Notifications from '../components/screens/app/Notifications'
import AddFriend from '../components/screens/app/AddFriend'

export default createStackNavigator(
    {
        Home,
        FriendList,
        MyRecord,
        Notifications,
        AddFriend,
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
)
