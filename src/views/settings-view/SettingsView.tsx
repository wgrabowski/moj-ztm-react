import { useLocalStorage } from '../../data-access/hooks/storage.hook';
import { MyWidgets } from '../../settings/my-widgets/MyWidgets';

export const SettingsView = () => {
	const [state, update, remove] = useLocalStorage('ztm-widgets', []);

	return (
		<main>
			<MyWidgets />
		</main>
	);
};
