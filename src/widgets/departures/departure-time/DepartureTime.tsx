import { Fragment } from 'react';

interface DepartureTimeProps {
	estimatedTime: string;
}

function getTimeFromNow(time: string) {
	const formatter = new Intl.RelativeTimeFormat('pl');
	const now = Date.now();
	const then = new Date(time);
	const [{ type, value, unit }] = formatter.formatToParts(
		(then.getTime() - now) / 60000,
		'minute'
	);

	return `${value} m`;
}

export const DepartureTime = ({ estimatedTime }: DepartureTimeProps) => {
	return <Fragment>{getTimeFromNow(estimatedTime)}</Fragment>;
};
