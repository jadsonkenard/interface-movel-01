import styled from "styled-components/native";
import { theme } from "../../../components";

export const Container = styled.View`
    height: 90px;
    padding: 0px 14px;
    justify-content: center;
    width: 90%;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.gray};
    margin-top: 10px;
`

export const ContainerItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerTitleItem = styled.Text`
    
`

export const ContainerTextItem = styled.Text`
    
`