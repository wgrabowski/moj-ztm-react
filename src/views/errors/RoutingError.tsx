import { Link } from 'react-router-dom';
import styled from 'styled-components';
const View = styled.div`
	text-align: center;
`;
export const RoutingError = () => (
	<View>
		<h1>Ups, coś poszło nie tak</h1>
		<hr />
		<Link to="/">Dashboard</Link>
		&emsp;
		<Link to="/settings">Ustawienia</Link>
	</View>
);
