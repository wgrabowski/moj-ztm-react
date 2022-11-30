import { useEffect, useState } from 'react';
import { Stop } from '../model';
import { useGetStopsQuery } from '../ztmApi';

/**
 * return list of stops grouped by given field name
 * meant to be used to get data for option groups in select
 * @param groupBy
 */
export function useGroupedStops(groupBy: keyof Stop): Record<string, Stop[]> {
	const [groups, setGroups] = useState({});
	const { data: stops } = useGetStopsQuery();
	useEffect(() => {
		if (stops?.length > 0) {
			setGroups(groupStops(stops, groupBy));
		}
	}, [stops, groupBy]);

	return groups;
}

function groupStops(
	stops: Stop[],
	groupBy: keyof Stop
): Record<string, Stop[]> {
	return stops.reduce((result, currentStop) => {
		const groupByValue = currentStop[groupBy] as any;
		if (result[groupByValue] === undefined) {
			result[groupByValue] = [];
		}
		result[groupByValue].push(currentStop);

		return result;
	}, {} as Record<string, Stop[]>);
}
