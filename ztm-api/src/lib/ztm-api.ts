import { createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Departure, DepartureWithStopId, Stop, UpdatedCollection } from './ztm-api.model';

export const ztmApi = createApi({
  reducerPath: 'ztmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ckan.multimediagdansk.pl/',
  }),
  endpoints: (builder): EndpointDefinitions => ({
    getStops: builder.query<Stop[], unknown>({
      query: () =>
        `dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json`,
      transformResponse(baseQueryReturnValue: UpdatedCollection<Stop>) {
        return baseQueryReturnValue?.stops as Stop[];
      },
    }),
  }),
});
export const ztmApi2 = createApi({
  reducerPath: 'ztmApi2',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ckan2.multimediagdansk.pl/',
  }),
  endpoints: (builder): EndpointDefinitions => ({
    getDeparturesFromStop: builder.query<Departure[], number>({
      query: (stopId) => `departures?stopId=${stopId}`,
      transformResponse(baseQueryReturnValue: UpdatedCollection<Departure>) {
        return baseQueryReturnValue?.departures;
      },
    }),
    getDeparturesFromStops: builder.query<DepartureWithStopId[], string[]>({
      query: (stopIds) => `departures`,
      transformResponse(
        baseQueryReturnValue: Record<string, UpdatedCollection<Departure>>,
        meta,
        stopIds
      ) {
        return stopIds
          .map((stopId) =>
            baseQueryReturnValue[stopId].departures.map((departure) => ({
              ...departure,
              stopId,
            }))
          )
          .flatMap((value) => value) as DepartureWithStopId[];
      },
    }),
  }),
});

export const { useGetStopsQuery } = ztmApi;

export const { useGetDeparturesFromStopQuery, useGetDeparturesFromStopsQuery } =
  ztmApi2;
