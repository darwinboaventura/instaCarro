import React, { Component } from 'react';
import Auction from '../auction/Auction';
import AuctionsStyle from './Auctions.css';

export default class Auctions extends Component {
	render() {
		return (
			<section className="ins-auctions clearfix">
				<Auction />

				<Auction />
				
				<Auction />
			</section>
		);
	}
}