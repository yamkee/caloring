import styled from 'styled-components/native'

interface ButtonProps {
    onPress: any
    style?: any
}

export default styled.TouchableOpacity<ButtonProps>(props => ({
    ...props.style,
}))
