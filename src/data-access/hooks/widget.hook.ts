import { WidgetConfig } from '../model';
import { useLocalStorage } from './storage.hook';

export const useWidgetsConfig = () => {
	const [widgets, updateWidgets, removeAllWidgets] = useLocalStorage<
		WidgetConfig[]
	>(`my-ztm-widgets`, []);

	function addWidgetConfig(config: WidgetConfig) {
		updateWidgets([...widgets, config]);
	}

	function updateWidgetConfig(index: number, config: WidgetConfig) {
		const copy = [...widgets];
		copy[index] = config;
		updateWidgets(copy);
	}

	function removeWidgetConfig(index: number) {
		const copy = [...widgets];
		copy.splice(index, 1);
		updateWidgets(copy);
	}

	return {
		widgets,
		addWidgetConfig,
		removeWidgetConfig,
		updateWidgetConfig,
		removeAllWidgets,
	};
};
