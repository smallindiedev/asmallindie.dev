import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Projects from './Projects.js';
import About, { ResumeImage } from './About.js';

import './extras.css';

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Route path='/:somewhere' component={Padder} />

				<Switch>
					<Route path='/projects' component={Projects} />
					<Route path='/about' component={About} />
					<Route path='/resume' component={ResumeImage} />

					<Route component={Home} />
				</Switch>
			</Router>
		);
	}
}

function Padder({ match }) {
	const validPaths = ['projects', 'about', 'resume'];

	if (validPaths.includes(match.params.somewhere))
		return <div style={{ height: '60px' }} />;

	return null;
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));