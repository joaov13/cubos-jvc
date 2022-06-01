import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideContainer, SlideContent, SlideImage, SlideParagraph, SliderStyled, SlideTitle } from "./styled";
import Image from "next/image";
const CubeSlide = () => {
  const cubes = {
    url: {
      x3: '/images/cubo-3x3.png',
      x2: '/images/cubo-2x2.png'
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <>
      <SlideContainer>
        <SlideTitle>Selecione o cubo que deseja aprender</SlideTitle>
        <SliderStyled {...settings}>
          <SlideContent>
            <SlideImage src='/images/cubo-3x3.png'></SlideImage>
            {/* <Image className="cubo" src='/images/cubo-3x3.png' width={100} height={100}></Image> */}
            <SlideParagraph>3x3</SlideParagraph>
          </SlideContent>
          <SlideContent>
            <SlideImage src='/images/cubo-2x2.png'></SlideImage>
            {/* <Image className="cubo" src='/images/cubo-2x2.png' width={100} height={100}></Image> */}
            <SlideParagraph>2x2</SlideParagraph>
          </SlideContent>
        </SliderStyled>

      </SlideContainer>
    </>
  )
};

export default CubeSlide;