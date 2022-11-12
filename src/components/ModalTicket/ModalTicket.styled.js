import styled from "styled-components";
export const Wrapper = styled.div`
  background-color:azure ;
  width: 100vw ;
  height: 100vh ;
  background:rgba(0,0,0,0.4);
  position:fixed ;
  left:0 ;
  top:0 ;
  display:flex ;
  align-items:center ;
  justify-content: center;
  z-index:100 ;
`;

export const Container = styled.div`
background-color: white;
    border-radius: 10px;
    width: 50vw;
    min-height: 80vh;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

`;
export const Border = styled.div`
  margin-top:5vh ;
  width: 75%;
  height: 10vh ;
  padding: 20px 20px;
  border: 0px solid grey;
  border-radius: 3px;
  text-align: center;
  box-shadow: 0 0 10px rgb(1, 1, 0.5);
  background-color: rgba(0, 0, 0, 0.07);
  justify-content:space-between ;
  align-items:center ;
  display:flex ;


  & >.buttonWontToGo {
        width: 220px;
        height: 65px;
        font-size: 20px;
        color: white;
        border: 0px solid transparent;
        border-radius: 3px;
        background-color: rgb(255, 0, 55);
        
        &:active {
            background-color: red;
        }
    }

 `;
export const InputIATA = styled.input`
    margin-left: 10px;
    width: 190px;
    height: 60px;
    font-size: 16px;
    margin-right: 10px;
    border: 0px solid transparent;
    border-radius: 3px;
    background-color: rgb(248, 254, 255);
  `;
export const ContainerTicket = styled.div`
  display:flex ;
  flex-direction: column ;
  width: 68%;
  margin: 3% ;
  overflow-y:auto;
   &>div:nth-child(even) {background-color:antiquewhite} 
  `;
