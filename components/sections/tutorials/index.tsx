import Image from "next/image";
import CubeSlide from "../../items/cubeSlide";
import { TutorialContainer, TutorialParagraph, TutorialTitle } from "./styled";

const Tutorials = () =>{
    return(
        <TutorialContainer>
            <TutorialTitle>Tutoriais</TutorialTitle>
            <TutorialParagraph>Que tal aprender como resolver um cubo mágico?</TutorialParagraph>
            <CubeSlide />
        </TutorialContainer>
    )
}

export default Tutorials;