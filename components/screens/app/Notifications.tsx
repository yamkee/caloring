import React, { useState, useEffect } from 'react'
import { View, Dimensions, PixelRatio } from 'react-native'

import Button from '../../molecules/buttons/default-button'
import Text from '../../atoms/Text'

export default function Notifications(props: any) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button
                onPress={() => {
                    props.navigation.navigate('Home')
                }}
                title="Home"
            />
        </View>
    )
}
