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
						<h1 className='pt-5'>Welcome!</h1>
						<p>
							My name is Sevan Mazmanian, and I maintain this website as an online portfolio.<br />
							Hopefully, it serves as a good showcase of my projects.
						</p>
					</Container>
				</Jumbotron>
				<div className='px-3'>
					<Container fluid>
						<Row className='justify-content-center'>
							<Col md={12} lg={3}>
								<h2>Summary</h2>
								<p>
									<h5>This is some very cool text <br /> <br /> </h5>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptates odit illo ratione assumenda neque accusamus aliquam rem, quam provident libero, nemo, dolores similique aut iusto natus vel fugiat illum.Id inventore nobis quia quaerat animi rem explicabo velit beatae mollitia tempore magnam cupiditate atque, maiores voluptatum praesentium ducimus debitis nemo illum qui dolorem omnis temporibus esse! Accusamus, odio a.
								</p>
							</Col>
							<Col md={12} lg={3}>
								<h2>Filler</h2>
								<p>
									<h5>You never really think about how hard filling whitespace is. <br /> <br /> </h5>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id ex nulla. Sint cumque voluptatibus beatae esse dolorem labore consequuntur perferendis nulla reprehenderit voluptates aspernatur pariatur molestiae, iure eaque ipsum.Suscipit molestiae delectus, quas excepturi corrupti sequi quibusdam consequatur, minus nemo voluptate rem consequuntur, ducimus repellendus quis quod doloribus. Excepturi non aliquid necessitatibus temporibus consequatur id dolorem aperiam. Esse, excepturi.
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