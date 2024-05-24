import styled from "styled-components/native";
import { theme } from "../../components";


export const Container = styled.View`
    align-items: center;

`
export const ContainerContent = styled.View`
    background-color: ${theme.colors.gray80};
    margin-top: 12px;
    border-radius: 12px;
    width: 90%;
    padding-bottom: 12px;
`

export const ContainersProfile = styled.TouchableOpacity`
    padding-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
`