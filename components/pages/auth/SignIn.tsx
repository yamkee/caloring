import React, {useReducer, useCallback, useEffect} from 'react';
import {View, Button} from 'react-native';

import SignBox from "../../organisms/auth/SignBox"

export default function SignIn(props: any) {
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SignBox />
      <Button title="Sign In" onPress={()=>{
        props.navigation.navigate('Home')
      }}/>
      <Button title="Sign Up" onPress={()=>{
        props.navigation.navigate('SignUp')
      }}/>
    </View>
  );
}
