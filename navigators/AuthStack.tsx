import { createStackNavigator } from 'react-navigation-stack'

import SignIn from '../components/screens/auth/SignIn'
import SignUp from '../components/screens/auth/SignUp'

export default createStackNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp,
    },
    { headerMode: 'none' }
)
