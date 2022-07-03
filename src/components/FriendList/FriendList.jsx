import PropTypes from "prop-types";
import { FriendListItem } from "./FriendItem/FriendItem";
import { Friends } from "./FriendListStyled";

export const FriendList = ({ friends }) => {
	return (
		<Friends>
			<FriendListItem friends={friends} />
		</Friends>
	);
};

FriendListItem.propTypes = {
	friends: PropTypes.array.isRequired,
};
