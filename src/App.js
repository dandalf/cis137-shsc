import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMinimized: false
		};
	}

	minimizeHeader = () => {
		this.setState({
			headerMinimized: !this.state.headerMinimized
		});
	};

	render() {
		let {headerMinimized} = this.state;
		return (
				<div className={`App-hero ${headerMinimized ? 'minimized' : ''}`}>
					<header onClick={this.minimizeHeader}>
						<a href="/"><h1>Sullivan Heights Swim Club</h1></a>
					</header>
					<nav>
						<a href="/calendar">Calendar of Events</a> |
						<a href="/join">How to Join</a> |
						<a href="/memberprofile">Manage your Member Profile</a></nav>
				</div>
		);
	}
}

export default App;
