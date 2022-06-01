import styled from "styled-components";

export const NavContainerStyled = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;

`
export const NavBarStyled= styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: column;
      }
`
export const NavItemStyled = styled.p`
    font-size: 22px;
    margin: 50px;
    @media (max-width: 600px) {
        font-size: 18px;
        margin: 6px;
      }

`