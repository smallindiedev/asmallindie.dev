import React, { useRef } from 'react';
import { usePdf } from 'react-pdf-js';

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class About extends React.Component {
	render() {
		return (
			<div className='px-3'>
				<Container fluid className='d-none d-md-block'>
					<Row>
						<Col md={4}>
							<AboutText className='rounded-lg bg-dark text-white' />
						</Col>
						<Col md={8}>
							<AboutResume />
						</Col>
					</Row>
				</Container>

				<div className='d-md-none'>
					<Tabs fill defaultActiveKey='text' className='rounded-top customTabs'>
						<Tab eventKey='text' title='About'>
							<AboutText className='rounded-bottom bg-dark text-white' />
						</Tab>
						<Tab eventKey='resume' title='Resume [PDF]'>
							<AboutResume mobile className='rounded-bottom' />
						</Tab>
						<Tab eventKey='resumeImg' title='Resume [Image]'>
							<ResumeImage mobile scale={.6} />
						</Tab>
					</Tabs>
				</div>
			</div>
		);
	}
}

class AboutText extends React.Component {
	render() {
		return (
			<div className={`p-3 ${this.props.className}`}>
				<h2>About</h2>
				<p>
					Like 2 paragraphs or something about myself I guess
				</p>
				<h4>Resume</h4>
				<p>
					My resume should be viewable on this page. However, if that fails, there are direct links
					to the <a href='/SevanMazmanian_Resume.pdf'>pdf version</a>, as well as
					a static <a href='/resume'>image version</a>.
				</p>
				<h4>Contact</h4>
				<p>
					For any personal inquires, my <a href='mailto:mazmanian.sevan@gmail.com'>email</a> is open.
					This is the same email listed in my resume.
					<br />
					If there are any issues with the website itself, please
					contact me at the site&apos;s <a href='mailto:contact@asmallindie.dev'>contact email</a>.
				</p>
			</div>
		);
	}
}

class AboutResume extends React.Component {
	render() {
		const heightAfterNavbar = this.props.mobile ? window.innerHeight - 200 : window.innerHeight - 60;
		const heightAsString = `${heightAfterNavbar}px`;

		return (
			<ResponsiveEmbed className={`${this.props.className}`} style={{ height: heightAsString }}>
				<iframe src={'/SevanMazmanian_Resume.pdf'} title='resume' />
			</ResponsiveEmbed>
		);
	}
}

export function ResumeImage(props) {
	const canvasEl = useRef(null);
	const canvasStyle = props.mobile ? { minWidth: '100%' } : {};
	const canvasClass = props.mobile ? `rounded-bottom ${props.className}` : `px-3 ${props.className}`;

	return (
		<div style={{ display: 'flex', fontSize: '0' }}>
			<canvas ref={canvasEl} className={canvasClass} style={canvasStyle} />
			{usePdf({ canvasEl, file: '/SevanMazmanian_Resume.pdf', scale: (props.scale || 1.4), page: 1 })}
		</div>
	);
}

export default About;