import CircularProgress from '@mui/material/CircularProgress';
import { useWidgetsConfig } from '@moj-ztm/widgets/data-access';
import { NoWidgets } from './NoWidgets';

export const MyWidgets = () => {
  const { widgets } = useWidgetsConfig();

  return (
    <>
      {widgets?.length > 0 && <CircularProgress />}
      {widgets.length === 0 && <NoWidgets />}
    </>
  );
};
