import styled from "styled-components";
import { colors } from "../../../styles/colors";
export const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to bottom, ${colors.vermelho}, ${colors.rosa});
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`
export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ParagraphFooter = styled.p`
    color: white
    font-size: 16px;
    &.copyright{
        font-size: 12px;
    }
`
export const FooterLink = styled.a`
    margin: 0 10px 0 10px;
`
