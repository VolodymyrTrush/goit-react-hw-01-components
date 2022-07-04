import styled from "styled-components";

export const Table = styled.table`
	width: 60%;
	margin: 0 auto;
	text-align: center;
	border-radius: 5px;
	background: ${(props) => props.theme.colors.greyBg};
	box-shadow: ${(props) => props.theme.colors.boxShadow};	
`;
