import { ReactNode } from 'react';
import { useWidgetsConfig } from '../../data-access/hooks/widget.hook';
import { WidgetConfig } from '../../data-access/model';
import { DeparturesConfigureView } from '../../widgets/departures';
import { WidgetType } from '../model';

export const MyWidgetsList = () => {
	const { widgets, updateWidgetConfig, removeWidgetConfig, addWidgetConfig } =
		useWidgetsConfig();

	const widgetConfigViewComponents: Record<
		WidgetType,
		(config: WidgetConfig, index: number) => ReactNode
	> = {
		[WidgetType.departure]: ({ data }: WidgetConfig, index: number) => {
			const { stopId, stopLabel, amount } = data;

			return (
				<DeparturesConfigureView
					key={index}
					stopId={stopId}
					stopLabel={stopLabel}
					amount={amount}
				/>
			);
		},
	};

	return (
		<section>
			{widgets.map((widget, i) =>
				widgetConfigViewComponents[widget.type](widget, i)
			)}
		</section>
	);
};
