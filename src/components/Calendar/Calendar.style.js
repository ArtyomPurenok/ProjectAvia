import styled from "styled-components";
export const StyleDatePicker = styled.div`
.react-datepicker__input-container>input{
    width: 260px;
    height: 40px;
    margin: 10px 8px 10px 8px;
    padding: 0px;
    font-size: 17px;
    text-align: center;
    border: none;
    background-color: rgb(74, 81, 91);
    outline: none;
    color: #a3a3a3;
}
.react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: #1bbc9b;
    color: #fff;
    border-radius: 50%;
    height: 14px;
    width: 14px;
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
    top: -18px;
    right: -7px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
}
`;