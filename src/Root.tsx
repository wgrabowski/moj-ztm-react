import './Root.css';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { store } from './data-access/store';
import { Provider } from 'react-redux';

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
	<Provider store={store}>
		<main>
			<SettingsLink>
				<Link to="settings">&#x2699;&#xFE0F;</Link>
			</SettingsLink>
			<Outlet />
		</main>
	</Provider>
);

export default Root;
