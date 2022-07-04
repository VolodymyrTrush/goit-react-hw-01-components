import PropTypes from "prop-types";
import { TransactionsItems } from "./TransactionsItems/TransactionsItems";
import { Table } from "./TransactionsHistory.Styled";
import { TableItems } from "./TransactionsItems/TransactionsItems.Styled";

export const TransactionsHistory = ({ transactions }) => {
	return (
		<Table>
			<TableItems>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				<TransactionsItems transactions={transactions} />
				</tbody>
			</TableItems>
		</Table>
	);
};

TransactionsHistory.propTypes = {
	transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
