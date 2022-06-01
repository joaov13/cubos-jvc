import styled from 'styled-components';
export const CubeStyled = styled.div`

    margin: 10px;
    border-radius: 6px;
    width: 110px;
    height: 110px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px;


`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`
export const Piece = styled.div`
    height: 35px;
    width: 35px;
    margin: 2px;
    border-radius: 4px;
    border: solid 1px black;
    &.blue{
        background-color: #048ABF;
    }
    &.green{
        background-color: #027333;
    }
    &.red{
        background-color: #BF1B28;
    }
    &.orange{
        background-color: #E39605;
    }
    &.yellow{
        background-color: #F2E405;
    }
    &.snow{
        background-color: snow;
    }
`

  