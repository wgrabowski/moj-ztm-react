import AddIcon from '@mui/icons-material/Add';
import { Box, Button, SvgIcon, Typography } from '@mui/material';

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
