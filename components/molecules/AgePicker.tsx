import React, { useState, useEffect } from 'react'
import { Picker } from 'react-native'
import styled from 'styled-components/native'

import * as screen from '../../constants/Dimensions'
import Colors from '../../constants/Colors'

const Wrapper = styled.View({
    width: screen.width * 0.95,
    height: screen.height * 0.059,
    marginHorizontal: screen.width * 0.025,
    borderRadius: (screen.height * 0.059) / 2,
    borderWidth: 1,
    borderColor: Colors.defaultGrey,
})

export default (props: any) => {
    const [age, setAge] = useState()
    useEffect(() => {
        props.setAge(age)
    }, [age])
    return (
        <Wrapper>
            <Picker
                selectedValue={age}
                style={{
                    alignSelf: 'center',
                    width: screen.width * 0.8,
                }}
                onValueChange={value => {
                    setAge(value)
                }}
            >
                <Picker.Item label="연령을 선택하여주세요." />
                <Picker.Item label="10대" value={10} />
                <Picker.Item label="20대" value={20} />
                <Picker.Item label="30대" value={30} />
                <Picker.Item label="40대" value={40} />
                <Picker.Item label="50대" value={50} />
            </Picker>
        </Wrapper>
    )
}
