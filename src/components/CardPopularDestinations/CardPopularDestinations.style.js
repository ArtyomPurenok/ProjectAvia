import styled from 'styled-components';
export const Wrapper = styled.div`
display:block;
height: 100% ;
width:auto ;
position: relative;

`;

export const Image = styled.img`
display:block ;
width: 100%;
height: 100%;
border-radius: 15px;
object-fit: cover;

&:hover{transform: scale(1.1)}
`;


export const Caption = styled.p`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 4px;
position: absolute;    
top: 194px;
width: 157px;
height: 37px;
`;

export const CountryName = styled.p`
    
    display: flex;
    padding: 0px;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px; color: white ;
  font-weight:800 ;
  margin:0 ;
 
`;