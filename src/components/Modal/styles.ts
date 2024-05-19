import styled from "styled-components/native";
import theme from "../themes/theme";

export const Container = styled.View`
    background-color: ${theme.colors.white};
    width: 100%;
    bottom: 0px;
    height: 300px;
    position: absolute;
    align-items: center;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    border-width: 1px;
    border-color: ${theme.colors.gray};
    z-index: 9;
    
`
export const TitleModal = styled.Text`
    color: ${theme.colors.primary};
    font-size: 18px;
    position: absolute;
    top: 10px;
    left: 14px;
`

export const TextModal = styled.Text`
    color: #000;
    position: absolute;
    top: 40px;
    left: 14px;
`

export const IconModal = styled.TouchableOpacity`
    position: absolute;
    right: 14px;
    top: 10px;
    z-index: 10;
`
export const LocalButtonModal = styled.View`
    position: absolute;
    bottom: 20px;
`