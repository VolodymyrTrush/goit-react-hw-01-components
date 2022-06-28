import PropTypes from "prop-types";
import { Items } from "components/Statistics/Items";
import {
	Section,
	Card,
	Title,
	StatsList,
} from "../Statistics/StatisticsStyled";
export const Statistics = ({ title, stats }) => {
    return (
//         <section class="statistics">
//   <h2 class="title">{title}</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>
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