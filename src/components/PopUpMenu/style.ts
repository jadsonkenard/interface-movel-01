import styled from "styled-components/native";
import theme from "../themes/theme";

export const Container = styled.View`
    background-color: ${theme.colors.white};
    width: 200px;
    top: 40px;
    right: 8px;
    height: 250px;
    position: absolute;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
    z-index: 9;
`
export const LocalButtonPopUp = styled.View`
    position: absolute;
    bottom: 10px;
    flex: 1;
    left: 25px;
`