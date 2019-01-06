import React, { Component } from 'react';
import Auction from '../auction/Auction';
import axios from 'axios';
import './Auctions.css';
import * as _ from 'underscore';

export default class Auctions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cars: []
		};
	}

	componentDidMount() {
		const request = axios.get('https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json');

		request.then((res) => {
			this.setState({
				cars: _.sortBy(res.data, (car) => {
					return car.remainingTime;
				})
			});
		});
	}

	render() {
		const auctions = this.state.cars.map((car) => 
			<Auction key={car.id} car={car} />
		);

		return (
			<section className="ins-auctions clearfix">
				{auctions}
			</section>
		);
	}
}