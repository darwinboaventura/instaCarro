import React, { Component } from 'react';
import MainStyle from './Main.css';

export default class Main extends Component {
	render() {
		return (
			<main className="ins-main clearfix">
				{this.props.children}
			</main>
		);
	};
}