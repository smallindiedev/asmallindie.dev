import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class RepoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: []
		};
	}

	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.user}/repos`)
			.then(response => response.json())
			.then(repoList => this.setState({ repos: repoList }));
	}

	render() {
		if (this.state.repos.length === 0)
			return null;

		const repos = [];

		this.state.repos.forEach(repo => {
			repos.push(<Repo key={repo.id} repo={repo} />);
		});

		return <CardDeck>{repos}</CardDeck>;
	}
}

class Repo extends React.Component {
	render() {
		return (
			<Card bg='secondary' text='white' className='rounded-lg' style={{ maxWidth: '18rem' }}>
				<Card.Body>
					<Card.Title>{this.props.repo.name}</Card.Title>
					<Card.Text>{this.props.repo.description}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<a href={this.props.repo.html_url}>Repository</a>
				</Card.Footer>
			</Card>
		);
	}
}

export class FeaturedRepo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repo: null
		};
	}

	componentDidMount() {
		fetch(`https://api.github.com/repos/smallindiedev/${this.props.name}`)
			.then(response => response.json())
			.then(repo => this.setState({ repo: repo }));
	}

	render() {
		if (this.state.repo === null)
			return null;

		return (
			<Repo repo={this.state.repo} />
		);
	}
}

export default RepoList;