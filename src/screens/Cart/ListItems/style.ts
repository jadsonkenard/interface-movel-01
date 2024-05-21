import styled from "styled-components/native";
import { theme } from "../../../components";

export const Container = styled.View`
    background-color: ${theme.colors.gray80};
    height: 90px;
    padding: 0px 14px;
    justify-content: center;
    width: 350px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const ContainerItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
