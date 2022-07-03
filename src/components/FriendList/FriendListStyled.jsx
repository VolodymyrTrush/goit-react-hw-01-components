import styled from "styled-components";
import { block } from "../../helpers/mixins";

export const Friends = styled.ul`
	width: calc(100% / 3);
	${block};
	margin-bottom: ${(props) => props.theme.spacing(8)};
`;