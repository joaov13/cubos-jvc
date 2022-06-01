import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import Slider from "react-slick";
import Image from 'next/image';
export const SlideContainer = styled.div`  
    width: 600px;
    height: 470px;
    background-color: ${colors.azul};
    display: flex;
    flex-direction: column;
    border-radius: 25px; 
    margin: 20px 0 20px 0;
    box-shadow: 0.5px 0.5px 3px;

    @media (max-width: 800px) {
        width: 500px;
        height 370px;
    }
    @media (max-width: 600px) {
        width: 350px;
        height: 220px;
      }
`
export const SliderStyled = styled(Slider)`
    .slick-current {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const SlideTitle = styled.p`
    margin: 20px 0 20px 0;
    font-size: 1.2rem;
    text-align: center;
    color: snow;
    @media (max-width: 800px) {
        font-size: 1rem
    }
    
`
export const SlideParagraph = styled.p`
    font-size: 1rem;
    text-align: center;
    color: snow;

`

export const SlideContent = styled.div`
    
`

export const SlideImage = styled.img`
    
    width: 300px;
    height: 300px;
    @media (max-width: 800px) {
        width: 250px;
        height 250px;
    }
    @media (max-width: 600px) {
        height: 100px;
        width: 100px;
      }
`
