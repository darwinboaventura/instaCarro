import React, { Component } from 'react';
import AuctionStyle from './Auction.css';

export default class Auction extends Component {
	render() {
		return (
			<div className="ins-auction">
				<div className="ins-auction__thumb">
					<img src="http://www.fillmurray.com/359/226" />

					<a className="ins-auction__thumb__caption" href="#">ver detalhes</a>
				</div>

				<div className="ins-auction__details">
					<ul className="ins-big-infos">
						<li className="ins-big-infos__item ins-big-infos__item--alert clearfix">
							<small className="ins-big-infos__item__name">Tempo restante</small>

							<h3 className="ins-big-infos__item__value">15:55:55</h3>
						</li>

						<li className="ins-big-infos__sep"></li>
						
						<li className="ins-big-infos__item ins-big-infos__item--success clearfix">
							<small className="ins-big-infos__item__name">Última oferta</small>

							<h3 className="ins-big-infos__item__value">R$ 29.250</h3>
						</li>
					</ul>

					<h4 className="ins-auction__details__title">Honda Fit 1.4 LXL 8V gasolina 4P automatico 2007</h4>

					<ul className="ins-auction__details__infos">
						<li className="ins-auction__details__infos__item clearfix">2007</li>
						<li className="ins-auction__details__infos__sep clearfix"></li>
						<li className="ins-auction__details__infos__item clearfix">92.610 KM</li>
					</ul>

					<a href="#" className="ins-button">Fazer oferta</a>
				</div>
			</div>
		);
	}
}