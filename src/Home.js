import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FeaturedRepo } from './RepoList.js';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className='bg-dark text-white'>
					<Container>
						<h1 className='pt-5'>Sevan Mazmanian</h1>
						<h3>Software Engineer</h3>
					</Container>
				</Jumbotron>
				<div className='px-3'>
					<Container fluid>
						<Row className='justify-content-center'>
							<Col md={12} lg={3}>
								<h2>Summary</h2>
								<p className='text-justify' style={{ fontSize: '18px' }}>
									Hello, my name is Sevan Mazmanian. I am currently studying in pursuit of
									a B.S in Computer Science at Western Governors University. This website was
									designed and developed by me to serve as a portfolio of my work. The projects
									shown here are automatically kept up to date with my GitHub profile and serve
									as a showcase of my extracurricular work. <br />
									I am currently actively seeking internships as a Software Engineer to develop
									valuable experience before graduating.
								</p>
							</Col>
							<Col md={12} lg={3}>
								<h2>Skills</h2>
								<h5>As Shown as Resume</h5>
								<p style={{ fontSize: '18px' }}>
									<b>Proficient:</b> C# | JavaScript | Node.js | React.js | Java | SQL | Git | Unity Engine <br />
									<b>Competent:</b> Python | HTML/CSS | C++ | Linux | Unix Terminal | Matlab <br />
									<b>Capable of:</b> Object-Oriented Programming | Unit & Integration Testing | Debugging <br />
								</p>
							</Col>
							<Col md={12} lg={3}>
								<h2>Featured Project</h2>
								<FeaturedRepo name='BotRoss' />
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Home;