import styled from "styled-components/native";
import { theme } from "../../../../components";

export const Container = styled.View`
    flex-direction: row;
    float: left;
    padding-top: 12px;
`
export const ImageInitialCards = styled.Image`
    background-color: ${theme.colors.primary};
    width: 120px;
    height: 120px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
export const ContainerTexts = styled.View`
    background-color: ${theme.colors.gray80};
    width: 255px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

`
export const TitleInitialCards = styled.Text`
    padding-top: 8px;
    font-size: 16px;
    padding-left: 12px;
`
export const TextInitialCards = styled.Text`
    color: #000;
    padding-left: 12px;
`
