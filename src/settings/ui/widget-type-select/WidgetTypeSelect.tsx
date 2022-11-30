import { WIDGET_TYPE_LABELS, WidgetType } from '../../model';

const widgetTypes = [WidgetType.departure].map((type) => ({
	value: type,
	label: WIDGET_TYPE_LABELS[type],
}));

interface WidgetTypeProps {
	onChange: (type: WidgetType) => void;
}

export const WidgetTypeSelect = ({ onChange }: WidgetTypeProps) => (
	<select
		onChange={(event) => onChange(parseInt(event.target.value) as WidgetType)}
	>
		{widgetTypes.map((type) => (
			<option value={type.value} key={type.value}>
				{type.label}
			</option>
		))}
	</select>
);
