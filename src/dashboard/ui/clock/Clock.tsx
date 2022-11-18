import { useEffect, useState } from 'react';

export const Clock = () => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [tick, setTick] = useState(0);

	useEffect(() => {
		const date = new Date();

		setHours(date.getHours());
		setMinutes(date.getMinutes());

		setTimeout(() => setTick(Date.now()), 60000);
	}, [tick]);

	return (
		<time>
			{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
		</time>
	);
};
