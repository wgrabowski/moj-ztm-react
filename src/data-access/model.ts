import { WidgetType } from '../settings/model';

export interface Stop {
	stopId: number;
	stopCode: string;
	stopName: string;
	stopShortName: string;
	stopDesc: string;
	subName: string;
	date: string;
	zoneId: 5;
	zoneName: string; // TODO enum
	virtual: 0;
	nonpassenger: 0;
	depot: 0;
	ticketZoneBorder: 0;
	onDemand: 0;
	activationDate: string;
	stopLat: number;
	stopLon: number;
	stopUrl: string;
	locationType: unknown;
	parentStation: unknown;
	stopTimezone: string;
	wheelchairBoarding: unknown;
}

export type UTCDateString = string;

export interface Departure {
	id: string;
	delayInSeconds: number;
	estimatedTime: string;
	headsign: string;
	routeId: number;
	scheduledTripStartTime: UTCDateString;
	tripId: number;
	status: 'REALTIME' | 'SCHEDULED';
	theoreticalTime: UTCDateString;
	timestamp: UTCDateString;
	trip: number;
	vehicleCode: number;
	vehicleId: number;
	vehicleService: string;
}

export interface DepartureWithStopId extends Departure {
	stopId: string;
}

export type UpdatedCollection<T> = {
	lastUpdated: UTCDateString;
} & { [key: string]: T[] };

export interface WidgetConfig<T = any> {
	type: WidgetType;
	data: T;
}
