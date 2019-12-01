import React,{useReducer, useEffect} from "react"
import {TextInput, StyleSheet} from "react-native"

interface IProps{
    onChange: any,
    value:string,
    id:string,
    secureTextEntry?:boolean
}

interface InputState{
    value: string,
    isValid: boolean,
    touched: boolean,
}

interface ActionState{
    type: string,
    value?: string,
    isValid?: boolean
}

const INPUT_UPDATE = "INPUT_UPDATE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state:InputState, action:ActionState) => {
    switch(action.type){
        case INPUT_UPDATE:
            return{
                ...state,
                value:action.value,
                isValid:action.isValid
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true
            };
        default:
            return state
    }

}

export default (props:IProps) =>{
    const [inputState, dispatch]=useReducer(inputReducer,{value:props.value? props.value:"", isValid:false, touched:false})
    const { onChange, id } = props;

    useEffect(()=>{
        if (inputState.touched) {
            onChange(id, inputState.value, inputState.isValid);
          }
    },[onChange,id,inputState])

    const textChangeHandler = (text:string) =>{
        let isValid = true; 
        dispatch({type:INPUT_UPDATE, value: text, isValid: isValid})
    }

    const blurHandler = () => {
        dispatch({ type: INPUT_BLUR });
      };

    return <TextInput 
        {...props}
        style={styles.TextInput}
        onChangeText={textChangeHandler}
        onBlur={blurHandler}
        value={inputState.value}
    />
}

const styles = StyleSheet.create({
    TextInput:{
        width:100,
        height:40,
        borderColor:"grey",
        borderWidth:1
    }
})