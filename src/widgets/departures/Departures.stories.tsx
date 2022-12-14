import { ComponentMeta } from '@storybook/react';
import { Departure, Departures, DeparturesProps } from './Departures';
import { mockDepartures } from './mockdata';

export default {
	component: Departures,
	title: 'widgets/Departures',
} as ComponentMeta<typeof Departures>;
const mockData: Departure[] = mockDepartures;

export const Default = {
	args: {
		label: 'Mój ulubiony przystanek',
		limit: 5,
		departures: mockData,
	} as DeparturesProps,
};
