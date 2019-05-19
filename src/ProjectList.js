import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class ProjectList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [
				{
					name: 'Flappy Things',
					description: 'A mobile game mimicking the gameplay of Flappy Bird, coded in C# and the Unity engine.',
					url: 'https://github.com/smallindiedev/UnityScripts/releases/tag/v1.0'
				},
				{
					name: 'Snakes and Ladders',
					description: 'A video game version of the board game Snakes and Ladders with a twist, ' +
						'the snakes and ladders are randomly placed every game.',
					url: 'https://github.com/smallindiedev/UnityScripts/releases/tag/v1.0'
				},
				{
					name: 'Test',
					description: 'A cool test',
					url: '/SevanMazmanian_Resume.pdf'
				}
			]
		};
	}

	render() {
		if (this.state.projects.length === 0)
			return null;

		const projects = [];

		this.state.projects.forEach(project => {
			projects.push(
				<Project key={project.name}
					name={project.name}
					description={project.description}
					url={project.url}
				/>
			);
		});

		return <CardDeck>{projects}</CardDeck>;
	}
}

class Project extends React.Component {
	render() {
		return (
			<Card bg='secondary' text='white' className='rounded-lg' style={{ maxWidth: '18rem' }}>
				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>
					<Card.Text>{this.props.description}</Card.Text>
				</Card.Body>
				<Card.Footer>
					{this.props.url ? (<a href={this.props.url}>Link</a>) : (null)}
				</Card.Footer>
			</Card>
		);
	}
}

export default ProjectList;