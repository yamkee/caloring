import React,{useReducer, useEffect, useCallback} from "react"
import styled from "styled-components/native"

import TextInput from "../../molecules/TextInput"
import Text from "../../atoms/Text"

interface FormState{
    values:{
      nickname:string
      password:string
    }
    validities:{
      nickname:boolean,
      password:boolean
    }
    formIsValid:boolean
  }
  
  interface ActionState{
    type:string,
    id:string,
    value:string,
    isValid:boolean
  }
  
  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
  
  const formReducer = (state:FormState, action:ActionState) =>{
    switch(action.type){
      case FORM_INPUT_UPDATE:
          const updatedValues = {...state.values, [action.id]:action.value};
          const updatedValidities = {...state.validities, [action.id]:action.isValid};
          
          let updatedFormIsValid = true;
          for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
          }
        return{
          value: updatedValues,
          validities: updatedValidities,
          formIsValid:updatedFormIsValid
        }
      default:
        return state
    }
  }

  
export default function SignBox(props:any){
    const [formState, dispatch] = useReducer(formReducer,{
        values:{
          nickname:"",
          password:""
        },
        validities:{
          nickname:false,
          password:false
        },
        formIsValid:false
      });
    
      const onChnageInput = useCallback((id:string, value:string, isValid:boolean)=>{
        dispatch({type:FORM_INPUT_UPDATE, id, value, isValid})
      },[dispatch])

    return <Box>
        <Text>nickname</Text>
        <TextInput id="nickname" onChange={onChnageInput} value=""/>
        <Text>password</Text>
        <TextInput id="password" onChange={onChnageInput} value="" secureTextEntry />
    </Box>
}

const Box = styled.View({
    width:"50%",
    height:"50%",
    justifyContent:"center",
    alignItems:"center"
})