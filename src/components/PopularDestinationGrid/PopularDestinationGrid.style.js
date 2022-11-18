import styled from "styled-components";
export const ParentGrid=styled.div`
display: grid;
grid-template-columns: repeat(3, 33%);
grid-template-rows: repeat(2, 50%);
grid-column-gap: 20px;
grid-row-gap: 20px;
width: 65%; 
justify-content:center ;
align-items: center;
height:60vh ;
`;
export const CardContainer=styled.div`
&.child1 { grid-area: 1 / 1 / 2 / 3; height:30vh; width:100%}
&.child2 { grid-area: 1 / 3 / 2 / 4; height:30vh; width:100%}
&.child3 { grid-area: 2 / 1 / 3 / 2; height:30vh;width:100%}
&.child4 { grid-area: 2 / 2 / 3 / 3; height:30vh;width:100%}
&.child5 { grid-area: 2 / 3 / 3 / 4; height:30vh; width:100%}
`;