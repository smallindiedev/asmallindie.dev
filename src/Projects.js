import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import RepoList from './RepoList.js';
import ProjectList from './ProjectList.js';

class Projects extends React.Component {
	render() {
		return (
			<div className='px-3'>
				<Tabs fill defaultActiveKey='github' className='rounded-top customTabs'>
					<Tab eventKey='github' title='Github Projects'>
						<div className='p-3 rounded-bottom customTabPane-Projects'>
							<RepoList user='smallindiedev' />
						</div>
					</Tab>
					<Tab eventKey='other' title='Other Projects'>
						<div className='p-3 rounded-bottom customTabPane-Projects'>
							<ProjectList />
						</div>
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default Projects;