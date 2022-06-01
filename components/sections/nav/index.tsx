import Cube from "../../items/cubo";
import { NavContainerStyled, NavItemStyled, NavBarStyled } from "./styled";

const Nav = () => {
    return (
        <>
            <NavContainerStyled>
                <Cube />
                <NavBarStyled>
                    <NavItemStyled>Home</NavItemStyled>
                    <NavItemStyled>Tutorias</NavItemStyled>
                    <NavItemStyled>Lojas</NavItemStyled>
                    <NavItemStyled>Curiosidades</NavItemStyled>

                </NavBarStyled>

            </NavContainerStyled>
        </>
    )
};

export default Nav;