import PropTypes from "prop-types";
import { Items } from "./Items/Items";
import {
	Section,
	Card,
	Title,
	StatsList,
} from "./Statistics.Styled";

export const Statistics = ({ title, stats }) => {
	return (
		<Section>
			<Card>
				{title && <Title>{title}</Title>}
				<StatsList>
					<Items data={stats} />
				</StatsList>
			</Card>
		</Section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
};
