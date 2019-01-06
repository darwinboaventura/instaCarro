import React, { Component } from 'react';
import AuctionStyle from './Auction.css';

export default class Auction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			remainingTime: props.car.remainingTime,
			bids: props.car.bids
		};

		this.formatRemainingTime.bind(this);
		this.getLastOfBidsAmount.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.countdown();
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	countdown() {
		this.setState({
			remainingTime: this.state.remainingTime - 1
		});
	}

	formatRemainingTime(remainingTime) {
		let formated = '';
		const time = String(remainingTime);

		for (let i = 0; time.length > i; i++) {
			if (formated.length % 3 === 0) {
				formated += time[i];
			} else {
				formated += time[i] + ':';
			}
		}

		if (formated.length % 3 === 0) {
			formated = formated.slice(0, -1);
		}

		return formated;
	}

	getLastOfBidsAmount(bids) {
		const length = bids.length;

		if (length) {
			return bids[length - 1].amount;
		} else {
			return 0;
		}
	}

	makeAnOffer(bids, e) {
		e.preventDefault();

		const length = bids.length;

		if (length) {
			const lastBid = bids[length - 1];

			this.setState({
				bids: [bids, Object.assign({}, lastBid, {
					amount: lastBid.amount + 250,
					createdAt: new Date().toISOString()
				})]
			});
		} else {
			this.setState({
				bids: [
					{
						amount: 250,
						channel: 'web',
						createdAt: new Date().toISOString(),
						dealership: "Instacarro"
					}
				]
			})
		}
	}

	render() {
		return (
			<div className="ins-auction">
				<div className="ins-auction__thumb">
					<img src={this.props.car.imageUrl} />

					<a className="ins-auction__thumb__caption" href="#">ver detalhes</a>
				</div>

				<div className="ins-auction__details">
					<ul className="ins-big-infos">
						<li className="ins-big-infos__item ins-big-infos__item--alert clearfix">
							<small className="ins-big-infos__item__name">Tempo restante</small>

							<h3 className="ins-big-infos__item__value">{this.formatRemainingTime(this.state.remainingTime)}</h3>
						</li>

						<li className="ins-big-infos__sep"></li>
						
						<li className="ins-big-infos__item ins-big-infos__item--success clearfix">
							<small className="ins-big-infos__item__name">Última oferta</small>

							<h3 className="ins-big-infos__item__value">R$ {this.getLastOfBidsAmount(this.state.bids).toLocaleString('pt-BR')}</h3>
						</li>
					</ul>

					<h4 className="ins-auction__details__title">{this.props.car.make} {this.props.car.model} {this.props.car.version}</h4>

					<ul className="ins-auction__details__infos">
						<li className="ins-auction__details__infos__item clearfix">{this.props.car.year}</li>
						<li className="ins-auction__details__infos__sep clearfix"></li>
						<li className="ins-auction__details__infos__item clearfix">{this.props.car.km.toLocaleString('pt-BR')} KM</li>
					</ul>

					<a href="#" className="ins-button" onClick={(e) => { this.makeAnOffer(this.state.bids, e) }}>Fazer oferta</a>
				</div>
			</div>
		);
	}
}