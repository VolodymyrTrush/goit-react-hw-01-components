import PropTypes from "prop-types";
import {
	FriendItem,
	Status,
	Avatar,
	UserName,
} from "./FriendItem.Styled";

export const FriendListItem = ({ friends, isOnline }) => {
	return friends.map((friend) => (
		<FriendItem key={friend.id}>
			<Status isOnline={friend.isOnline}></Status>
			<Avatar src={friend.avatar} alt="User avatar" width="48" />
			<UserName>{friend.name}</UserName>
		</FriendItem>
	));
};

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};
