import styled from "styled-components";
import { colors } from "../../../styles/colors";
export const TutorialContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        height 500px;
    }
    @media (max-width: 600px) {
        height 400px;
    }
    

`
export const TutorialTitle = styled.h2`
    font-size: 2rem;
    margin-top: 30px;
    @media (max-width: 400px) {
        font-size: 1.8rem;
    }
    
`
export const TutorialParagraph = styled.p`
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 600px) {
        font-size: 1.3rem;
    }
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`

