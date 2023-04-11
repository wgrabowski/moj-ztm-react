import { useWidgetsConfig } from '@moj-ztm/widgets/data-access';
import { NoWidgets } from './views/NoWidgets';
import { WidgetList } from '@moj-ztm/widgets/shared/ui';

export function Dashboard() {
  const { widgets } = useWidgetsConfig();

  return (
    <>
      {widgets?.length && <WidgetList />}
      {widgets.length === 0 && <NoWidgets />}
    </>
  );
}

export default Dashboard;
