import React, { Component } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Auctions from '../auctions/Auctions';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<Main>
					<Auctions />
				</Main>
			</div>
		);
	}
}

export default App;
