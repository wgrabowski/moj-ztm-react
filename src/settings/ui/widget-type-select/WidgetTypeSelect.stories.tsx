import { ComponentMeta } from '@storybook/react';
import { WidgetTypeSelect } from './WidgetTypeSelect';

export default {
	title: 'settings/ui/WidgetTypeSelector',
	component: WidgetTypeSelect,
	argTypes: {
		onChange: { action: 'selected' },
	},
} as ComponentMeta<typeof WidgetTypeSelect>;

export const Default = {
	args: {},
};
