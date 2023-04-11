import { useWidgetsConfig } from '@moj-ztm/widgets/data-access';
import CircularProgress from '@mui/material/CircularProgress';
import { NoWidgets } from './views/NoWidgets';

export function Dashboard() {
  const { widgets } = useWidgetsConfig();

  return (
    <>
      {widgets?.length && <CircularProgress />}
      {widgets.length === 0 && <NoWidgets />}
    </>
  );
}

export default Dashboard;
