import styled from "styled-components";
export const HeaderContainer = styled.div`
    width: 100%;
    height: 600px;
    box-shadow: 1px 1px 5px;
    
    background-color: #172622;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: left center;
    background-size: cover;
    background-image: url(/images/wallpaper.jpg);

    
    display: flex;
    align-items: center;
    justify-content: left;

    @media (max-width: 1550px) {
        height 500px;

    }
    @media (max-width: 1100px) {
        height 300px;
    }
    @media (max-width: 600px) {
        background-position: center;
      }

`
export const HeaderTitle = styled.h1`
    margin-left: 100px;
    border-text: solid 1px black;
    color: white;
    font-family: 'Luckiest Guy';
    letter-spacing: 0.3rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 5rem;
    @media (max-width: 1300px) {
        font-size: 4rem;
        margin-left: 80px;
    }
    @media (max-width: 1100px) {
        font-size: 3rem;
        margin-left: 80px;
    }
    @media (max-width: 850px) {
        margin-left: 50px;
    }
    @media (max-width: 800px) {
        font-size: 3rem;
        max-width: 160px;
        text-align: center;
      }
`