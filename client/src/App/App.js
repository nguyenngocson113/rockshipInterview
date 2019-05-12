import React, { Component } from 'react';
import './App.scss';
import Login from './Components/Login';
import { connect } from 'react-redux';
import firebase from '../config/Firebase';
import Switch from './Components/Switch';

class App extends Component {

	state = {
		user: null
	};

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
				localStorage.setItem('user', user.uid);
			} else {
				this.setState({ user: null });
				localStorage.removeItem('user');
			}
		})
	}

	render() {
		const { user = null } = this.state;
		return (
			<div className="App">
				{user ? <Switch /> : <Login />}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);