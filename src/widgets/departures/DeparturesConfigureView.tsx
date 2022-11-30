import { DeparturesConfig } from './model';

export const DeparturesConfigureView = ({
	amount,
	stopLabel,
	stopId,
}: DeparturesConfig) => {
	return (
		<div>
			Pokaż {amount} odjazdów z przystanku {stopId} pod nazwą:{' '}
			<strong>{stopLabel}</strong>
		</div>
	);
};
