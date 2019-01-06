import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
	render() {
		return (
			<main className="ins-main clearfix">
				{this.props.children}
			</main>
		);
	};
}