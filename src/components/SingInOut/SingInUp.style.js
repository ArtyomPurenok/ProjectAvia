import styled, { keyframes } from "styled-components";
export const Wrapper = styled.div`
	align-items: center;
	background-color: white;
	background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
	place-items: center;
`;
export const Container = styled.div`
background-color: #e9e9e9;;
	border-radius: 0.7rem;
	box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
		0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
	height: 658px;
	max-width: 580px;
	overflow: hidden;
	position: relative;
	width: 100%; 
	display: flex ;
    `;

export const ContainerForm = styled.div`
	height: 100%;
	top: 0;
`;

export const OverlayContainer = styled.div`
	height: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 50%;
	
&.right{transition: all 2s ease-in-out;
	transform: translate(100%,0);

	
}
&.left{transition: all 2s ease-in-out;
	transform: translate(0px,0);


}
`;
export const OverlayWrapper = styled.div`
background-color: #008997;
	background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	position: relative;
display:flex ;
align-items: center ;
justify-content:center ;
`;
export const Panel = styled.div`
align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	position: absolute;
	text-align: center;
	top: 0;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	width: 50%;
`;
export const Button = styled.button`
background-color: #0367a6;
	background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
	border-radius: 20px;
	border: 1px solid #0367a6;
	color: #e9e9e9;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	padding: 0.9rem 4rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
`;

export const Forma = styled.form`
background-color: #e9e9e9;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 3rem;
	height: 100%;
	text-align: center;
& > .btn {
	margin-top: 1.5rem;
}


`;
export const Title = styled.h2`
font-weight: 300;
	margin: 0;
	margin-bottom: 1.25rem;
`;

export const Input = styled.input`
background-color: #fff;
	border: none;
	padding: 0.9rem 0.9rem;
	margin: 0.5rem 0;
	width: 100%;
`;
export const ButtonR = styled.button`
 width:300px;
 height:300px;
 background-color:red`
	;