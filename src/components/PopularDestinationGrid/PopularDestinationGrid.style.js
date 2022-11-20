import styled from "styled-components";
export const ParentGrid=styled.div`
display: grid;
grid-template-columns: repeat(3, 350px);
grid-template-rows: repeat(2, 370px);
grid-column-gap: 20px;
grid-row-gap: 20px;

justify-content:center ;
align-items: center;
`;
export const CardContainer=styled.div`
&.child1 { grid-area: 1 / 1 / 2 / 3; height:100%; width:100%}
&.child2 { grid-area: 1 / 3 / 2 / 4; height:100%; width:100%}
&.child3 { grid-area: 2 / 1 / 3 / 2; height:100%;width:100%}
&.child4 { grid-area: 2 / 2 / 3 / 3; height:100%;width:100%}
&.child5 { grid-area: 2 / 3 / 3 / 4; height:100%; width:100%}
`;