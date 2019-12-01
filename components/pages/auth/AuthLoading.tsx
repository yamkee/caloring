import React,{useEffect} from 'react';
import {View, Text, Button} from 'react-native';

export default function AuthLoading(props: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>AuthLoading</Text>
      <Button
        title="PedoTest"
        onPress={() => {
          props.navigation.navigate('Test');
        }}
      />
      <Button
        title="SignIn"
        onPress={() => {
          props.navigation.navigate('SignIn');
        }}
      />
    </View>
  );
}
