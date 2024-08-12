import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';

const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: 'green',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    borderRadius: '8px',
  },
}));

export default CustomSnackbar;
