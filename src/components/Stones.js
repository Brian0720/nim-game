import React from 'react';
import Container from 'react-bootstrap/Container';
import filter from 'lodash/filter';
import { Stone } from './Stone';

export const Stones = ({ stones = [], group, onStoneSelect }) => {
	const onClick = (stoneData) => {
		if (onStoneSelect) {
			onStoneSelect(group, stoneData, filter(stones, (stone) => stone.id !== stoneData.id));
		}
	};

	return (
		<Container>
			{stones.map((stoneData) => <Stone key={stoneData.id} stoneData={stoneData} onClick={onClick} />)}
		</Container>
	);
};
