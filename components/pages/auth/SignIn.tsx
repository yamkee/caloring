import React, {useState, useReducer, useCallback, useEffect} from 'react';
import {View, Button} from 'react-native';

import SignBox from "../../organisms/auth/SignBox"

export default function SignIn(props: any) {
  const [isValid, setIsValid] = useState(false)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SignBox getIsValid={(isValid:boolean)=>{
        setIsValid(isValid)
      }}/>
      <Button title="Sign In" onPress={()=>{
        if(isValid){
          props.navigation.navigate('Home')
        }
      }}/>
      <Button title="Sign Up" onPress={()=>{
        props.navigation.navigate('SignUp')
      }}/>
    </View>
  );
}
