import React from 'react';
import filter from 'lodash/filter';
import { Stone } from './Stone';

export const Stones = ({ stones = [], group, onStoneSelect }) => {
	const onClick = (stoneData) => {
		if (onStoneSelect) {
			onStoneSelect(group, stoneData, filter(stones, (stone) => stone.id !== stoneData.id));
		}
	};

	return stones.map((stoneData) => <Stone key={stoneData.id} stoneData={stoneData} onClick={onClick} />);
};
