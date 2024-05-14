import styled from "styled-components/native";
import theme from "./theme";

export const ButtonG = styled.TouchableOpacity`
    background-color: ${theme.colors.primary};
    width: 300px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`

export const ButtonP = styled.TouchableOpacity`
    background-color: ${theme.colors.primary};
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`

export const ButtonGOutline = styled.TouchableOpacity`
    width: 300px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px;
    border-color: ${theme.colors.primary};
`

export const ButtonPOutline = styled.TouchableOpacity`
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px;
    border-color: ${theme.colors.primary};

`
export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
`
export const ButtonTextOutline = styled.Text`
    color: ${theme.colors.primary};
    font-weight: bold;
`