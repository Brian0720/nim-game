import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stone } from './Stone';
import { Stones } from './Stones';
import find from 'lodash/find';
import filter from 'lodash/filter';
import isObject from 'lodash/isObject';

class Playground extends React.Component {
	state = {
		leftStones: [
			{
				id: 1,
				label: '>',
				variant: 'primary',
				disabled: false
			},
			{
				id: 2,
				label: '>',
				variant: 'primary',
				disabled: false
			}
		],
		rightStones: []
	};

	select = (group, selectedStoneData, stones) => {
		this.setState({
			leftStones:
				group === 'left'
					? stones
					: [ ...this.state.leftStones, { ...selectedStoneData, label: '>', variant: 'primary' } ],
			rightStones:
				group === 'right'
					? stones
					: [ ...this.state.rightStones, { ...selectedStoneData, label: '<', variant: 'success' } ]
		});
	};

	render() {
		const { leftStones, rightStones } = this.state;

		return (
			<Container>
				<h1>Generate Stones</h1>
				<Row>
					<Col>
						<Stones group="left" stones={leftStones} onStoneSelect={this.select} />
					</Col>
					<Col>
						<Stones group="right" stones={rightStones} onStoneSelect={this.select} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Playground;
