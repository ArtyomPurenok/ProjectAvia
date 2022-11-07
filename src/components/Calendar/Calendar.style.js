import styled from "styled-components";
export const StyleDatePicker = styled.div`
.react-datepicker__input-container>input{
    width: 240px;
    height: 60px;
    margin-right: 10px;
    padding-left: 20px;
    border-radius: 3px;
    background-color: rgb(248, 254, 255);
    border: none;
    font-size: 20px;
}
.react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: rgb(255 0 55);
    color: #fff;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    content: "×";
}
.react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0 6px 0 0;
    position: absolute;
    top: 0px;
    right: -20px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
}
`;