import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stones } from './Stones';

class Playground extends React.Component {
	state = {
		stonesNumber: 0,
		leftStones: [],
		rightStones: []
	};

	generate = (numberOfStones) => {
		const stones = [];

		for (let count = 1; count <= numberOfStones; count++) {
			stones.push({
				id: count,
				label: '>',
				variant: 'primary',
				disabled: false
			});
		}

		return stones;
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

	onInputChange = (e) => {
		const stonesNumber = e.target.value ? parseInt(e.target.value) : 0;

		if (stonesNumber !== this.state.stonesNumber) {
			this.setState({
				stonesNumber
			});
		}
	};

	onGenerateBtnClick = () => {
		const { stonesNumber } = this.state;

		this.setState({
			leftStones: this.generate(stonesNumber),
			rightStones: []
		});
	};

	render() {
		const { stonesNumber, leftStones, rightStones } = this.state;

		return (
			<Container>
				<h1>Generate Stones</h1>

				<Form className="form">
					<Form.Group>
						<Form.Label>Enter number of stones:</Form.Label>
						<Form.Control
							placeholder="Enter stones number"
							value={stonesNumber}
							onChange={this.onInputChange}
						/>
						<Button variant="primary" onClick={this.onGenerateBtnClick}>
							Generate
						</Button>
					</Form.Group>
				</Form>
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
