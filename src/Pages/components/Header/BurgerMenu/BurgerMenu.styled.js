import styled from "styled-components";
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
 `;

export const ToggleIcoN = styled.div`
display: block;
	position: relative;
	width: 100%;
	/* margin: -2.2em auto 0 0.2em; */
	-webkit-transition: margin 600ms;
	-moz-transition: margin 600ms;
	transition: margin 600ms;
	cursor: pointer;

    & div {display: block;
        width: 1em;
        height: 0.2em;
        margin: 0.5em;
        border-right: 1.8em solid #fff;
        border-left: 0.3em solid #d6d6d6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition-property: -webkit-transform, margin, border-right-color, box-shadow;
        -moz-transition-property: -moz-transform, margin, border-right-color, box-shadow;
        transition-property: transform, margin, border-right-color, box-shadow;
        -webkit-transition-duration: 600ms;
        -moz-transition-duration: 600ms;
        transition-duration: 600ms;}
    & div:nth-of-type(1) {
		-webkit-transition: opacity 300ms;
		-moz-transition: opacity 300ms;
		transition: opacity 300ms;
	}
    & div:nth-of-type(2) {
        -webkit-transform: rotate(-180deg);
		-moz-transform: rotate(-180deg);
		-ms-transform: rotate(-180deg);
		-o-transform: rotate(-180deg);
		transform: rotate(-180deg);
    }
     &.pushed {
        margin: -1.2em 0 0 0.1em;
    }
    &.pushed div:nth-of-type(1) {
		opacity: 0;
	}
    &.pushed div:nth-of-type(2) {
		margin-left: 0.4em;
		-webkit-transform: rotate(-137deg) translateY(-3.5em);
		-moz-transform: rotate(-137deg) translateY(-3.5em);
		-ms-transform: rotate(-137deg) translateY(-3.5em);
		-o-transform: rotate(-137deg) translateY(-3.5em);
		transform: rotate(-137deg) translateY(-1em);
	}
    &.pushed div:nth-of-type(3) {
		margin-left: -0.4em;
		-webkit-transform: rotate(-42deg);
		-moz-transform: rotate(-42deg);
		-ms-transform: rotate(-42deg);
		-o-transform: rotate(-42deg);
		transform: rotate(-42deg);
	}
    
 `;
export const Bar = styled.div`

 `;