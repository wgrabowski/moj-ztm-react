import './Root.css';
import { Link, Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
import styled from 'styled-components';

const SettingsLink = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	font-size: 1.25em;
	user-select: none;

	a {
		text-decoration: none;
	}
`;
const Root = () => (
	<main>
		<SettingsLink>
			<Link to="settings">&#x2699;&#xFE0F;</Link>
		</SettingsLink>
		<Outlet />
	</main>
);

export default Root;
