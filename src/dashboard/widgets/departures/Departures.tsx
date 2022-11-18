import styled from 'styled-components';
import { Clock } from '../../ui/clock/Clock';
import { DepartureTime } from './departure-time/DepartureTime';

export interface Departure {
	headsign: string;
	estimatedTime: string;
	theoreticalTime: string;
	delayInSeconds?: number | null;
	status: 'REALTIME' | 'SCHEDULED';
	routeId: number;
}

export interface DeparturesProps {
	label: string;
	limit?: number;
	departures: Departure[];
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: minmax(3ch, auto) 1fr minmax(6ch, auto);
	grid-auto-rows: auto;
`;
const Header = styled.header`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
`;
export const Departures = ({
	label,
	limit = 5,
	departures,
}: DeparturesProps) => (
	<section>
		<Header>
			<h1>{label}</h1>
			<Clock />
		</Header>
		<Grid>
			<span>Nr</span>
			<span>Kierunek</span>
			<span>Odjazd</span>
			{(limit ? departures.slice(0, limit) : departures).map((departure) => {
				return (
					<>
						<span>{departure.routeId}</span>
						<span>{departure.headsign}</span>
						<span>
							<DepartureTime estimatedTime={departure.estimatedTime} />
						</span>
					</>
				);
			})}
		</Grid>
	</section>
);
