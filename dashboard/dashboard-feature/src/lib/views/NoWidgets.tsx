import Box from '@mui/material/Box';
import { Button, SvgIcon, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const NoWidgets = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Typography variant={'h1'}>Nie dodałeś widżetów</Typography>
      <Button variant={'contained'} startIcon={<SvgIcon component={AddIcon} />}>
        Dodaj widżet
      </Button>
    </Box>
  );
};
