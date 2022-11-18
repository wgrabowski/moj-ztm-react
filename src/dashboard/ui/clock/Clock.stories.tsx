import { ComponentMeta } from '@storybook/react';
import { Clock } from './Clock';

export default {
	component: Clock,
	title: 'dashboard/ui/Clock',
} as ComponentMeta<typeof Clock>;

export const Default = {
	args: {},
};
