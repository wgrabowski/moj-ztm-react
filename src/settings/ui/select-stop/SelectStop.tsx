import * as React from 'react';
import { Fragment, useState } from 'react';
import { useGroupedStops } from '../../../data-access/hooks/groupedStops.hook';

interface SelectStopProps {
	value?: number | null;
	onChange: (selectedStop: number | null) => void;
}

export const SelectStop = ({ value, onChange }: SelectStopProps) => {
	const groups = useGroupedStops('zoneName');
	const [currentValue, setCurrentValue] = useState(value);

	const optionsList = (
		<>
			{Object.keys(groups)
				.sort()
				.map((zone) => {
					return (
						<optgroup label={zone} key={zone}>
							{groups[zone].map((stop) => (
								<option key={stop.stopId} value={stop.stopId}>
									{stop.stopName}
									{stop.subName} ({stop.stopDesc})
								</option>
							))}
						</optgroup>
					);
				})}
		</>
	);

	return (
		<select
			value={currentValue as number}
			onChange={(event) => {
				const selectedStopId =
					event.target.value?.length > 0 ? parseInt(event.target.value) : null;
				setCurrentValue(selectedStopId);
				onChange(selectedStopId);
			}}
		>
			{optionsList}
		</select>
	);
};
