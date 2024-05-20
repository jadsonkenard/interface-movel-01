import styled from "styled-components/native";
import { theme } from "../../../components";

export const Container = styled.View`
    height: 40px;
    padding: 0px 14px;
    justify-content: center;
    width: 350px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.gray};
    margin-top: 2px;
`

export const ContainerItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`