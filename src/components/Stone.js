import React from 'react';
import Button from 'react-bootstrap/Button';

export const Stone = ({ stoneData, onClick }) => {
	const { label, variant, disabled = false } = stoneData;

	const onButtonClick = () => {
		if (onClick) {
			onClick(stoneData);
		}
	};

	return (
		<Button variant={variant} disabled={disabled} onClick={onButtonClick}>
			{label}
		</Button>
	);
};
