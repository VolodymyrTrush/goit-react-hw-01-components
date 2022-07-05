import styled from "styled-components";
import { font, flex } from "../../../helpers/mixins";
import { generateDarkColorHex } from "../../../helpers/randomColor";

export const StatsItem = styled.li`
	${flex};
	flex-direction: column;
	width: calc(100% / 5);
	padding: ${(props) => props.theme.spacing(5)};
	background-color: ${generateDarkColorHex};
`;

export const Label = styled.span`
	${font({ fs: 16, fw: 400, lh: 18 })};
	color: ${(props) => props.theme.colors.white};
	margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Value = styled.span`
	${font({ fs: 24, fw: 500, lh: 28 })};
	color: ${(props) => props.theme.colors.white};
`;
