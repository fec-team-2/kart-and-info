import React from 'react';
import { Stars } from './stars.jsx';

export var Rating = function(props) {
	const ratingBarContainer = {
		display: 'flex',
		flexDirection: 'row',
		width: 'auto',
		height: 'auto',
		// alignItems: 'flex-start',
		justifyContent: 'flex-start',
	};
	const numStars = {
		textDecoration: 'none',
		color: '#757575',
		fontSize: '14px',
		// paddingLeft: '1.2vw',
	};
	const ratingBarDiv = {
		height: '18px',
		alignItems: 'center',
		marginBottom: '14px',
		display: 'flex',
		flexDirection: 'row',
		minWidth: '290px',
		height: 'auto',
		alignSelf: 'flex-start',
		marginLeft: '-.2.2vw',
	};

	const storeName = {
		maxWidth: '210px',
		textDecoration: 'none',
		color: '#757575',
		fontSize: '14px',
		width: 'auto',
	};
	const starStyle = {
		alignSelf: 'flex-start',
	};

	return (
		<div style={ratingBarContainer}>
			<div style={ratingBarDiv}>
				<a
					style={storeName}
					href="https://www.etsy.com/shop/SeaminglyPossible?ref=simple-shop-header-name&listing_id=512152848"
				>
					{props.storeName}
				</a>
				<div>
					<Stars style={starStyle} starAvg={props.stars} />
				</div>
				<div style={numStars}>({props.numStars})</div>
			</div>
		</div>
	);
};
