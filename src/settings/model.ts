export enum WidgetType {
	departure,
}

export const WIDGET_TYPE_LABELS: Record<WidgetType, string> = {
	[WidgetType.departure]: 'Odjazdy z przystanku',
};

export interface WidgetConfigureProps<T> {
	onUpdate: (widgetConfig: T) => void;
	data: T | null;
}
