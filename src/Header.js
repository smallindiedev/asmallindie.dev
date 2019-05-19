import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Header extends React.Component {
	render() {
		return (
			<Navbar expand='sm' variant='dark' bg='dark' fixed='top' collapseOnSelect='true'>
				<Navbar.Brand>SM</Navbar.Brand>

				<Navbar.Collapse>
					<Nav variant='pills'>
						<LinkContainer exact to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>

						<LinkContainer to='/projects'>
							<Nav.Link>Projects</Nav.Link>
						</LinkContainer>

						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>

				<Navbar.Brand href='https://github.com/smallindiedev'>
					<i className='fab fa-github' />
				</Navbar.Brand>
				<Navbar.Brand href='https://linkedin.com/in/sevan-mazmanian'>
					<i className='fab fa-linkedin' />
				</Navbar.Brand>

				<Navbar.Toggle />
			</Navbar>
		);
	}
}

export default Header;