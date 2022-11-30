import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../data-access/store';
import { DeparturesConfigure } from './DeparturesConfigure';

export default {
	component: DeparturesConfigure,
	title: 'widgets/Departures',
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
	argTypes: {
		onUpdate: {
			action: 'update',
		},
	},
} as ComponentMeta<typeof DeparturesConfigure>;

export const ConfigurationNew = {};
export const ConfigurationEdit = {
	args: {
		stopId: 110,
		amount: 3,
	},
};
