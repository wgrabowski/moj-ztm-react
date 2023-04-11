import { useWidgetsConfig } from '@moj-ztm/widgets/data-access';
import Stack from '@mui/material/Stack';

export const WidgetList = () => {
  const { widgets } = useWidgetsConfig();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
    >
      {widgets.map((widget, index) => (
        // TODO add widget components per type
        <span key={index}>{widget.label}</span>
      ))}
    </Stack>
  );
};
