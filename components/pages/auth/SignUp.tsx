import React from "react"
import {View, Button} from "react-native"

import Text from "../../atoms/Text"

export default function SignUp (props:any){
    return<View>
        <Button title="Home" onPress={()=>{
            props.navigation.navigate('Home')
        }}/>
    </View>
}