import { Profile } from "./components/Profile/Profile";
import user from "./data/user.json";
import { Statistics } from "./components/Statistics/Statistics";
import { data } from "./data/data";
import { FriendList } from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import { TransactionsHistory } from "./components/TransactionsHistory/TransactionsHistory";
import transactions from "./data/transactions.json";
import { GlobalStyle } from "./style/GlobalStyles";
import { Container } from "./components/Container";
import PropTypes from "prop-types";

export const App = () => {
	return (
		<Container>
			<GlobalStyle />
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
			<TransactionsHistory transactions={transactions} />
		</Container>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
};
