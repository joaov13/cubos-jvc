import { Column, CubeStyled, Piece } from "./styled";

const Cube = ()=> {
    const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'snow' ];
    const indices = Array.from({length: 9}, () => Math.floor(Math.random() * 6));

    return (
      <>
        <CubeStyled>
            <Column className="green">   
                <Piece className={colors[indices[0]]}/>
                <Piece className={colors[indices[1]]}/>
                <Piece className={colors[indices[2]]}/>
            </Column>
            <Column >   
                <Piece className={colors[indices[3]]}/>
                <Piece className={colors[indices[4]]}/>
                <Piece className={colors[indices[5]]}/>
            </Column>
            <Column >   
                <Piece className={colors[indices[6]]}/>
                <Piece className={colors[indices[7]]}/>
                <Piece className={colors[indices[8]]}/>
            </Column>
        </CubeStyled>
        
      </>
    )
  };
  
  export default Cube;