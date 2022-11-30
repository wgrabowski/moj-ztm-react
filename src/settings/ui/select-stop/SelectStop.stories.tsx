import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../data-access/store';
import { SelectStop } from './SelectStop';

export default {
	title: 'settings/ui/SelectStop',
	component: SelectStop,
	argTypes: {
		onChange: { action: 'selected' },
	},
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
} as ComponentMeta<typeof SelectStop>;

export const Default = {
	args: {
		value: 101,
	},
};
