import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Routes,
} from 'react-router-dom';
import Root from './Root';
import { DashboardView } from './views/dashboard-view/DashboardView';
import { SettingsView } from './views/settings-view/SettingsView';
import { RoutingError } from './views/errors/RoutingError';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<RoutingError />}>
			<Route element={<DashboardView />} index />
			<Route path="settings" element={<SettingsView />} />
		</Route>
	)
);
