import InputMask from 'react-input-mask';
// @mui
import { Button, Typography, TextField, Box } from '@mui/material';
import logoImage from '../assets/images/logoImage.svg';

// ----------------------------------------------------------------------

export default function SignIn() {
  return (
    <>
      <Box
        sx={{
          padding: '30px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#31D7EC',
            color: 'black',
            marginBottom: '20px',
          }}
        >
          English
        </Button>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '60%',
              minHeight: '600px',
              padding: '26px 30px',
              borderRadius: '12px',
              backgroundColor: '#078C61',
              boxShadow: '10px 10px 50px rgb(0 0 0 / 4%)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={logoImage} alt={'Logo '} width="50%" height="50%" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '30px 60px',
            }}
          >
            <Typography
              sx={{
                color: '#767D87',
                fontSize: '22px',
              }}
            >
              Enter your phone number
            </Typography>
            <Box
              sx={{
                display: 'flex',
                paddingTop: '20px',
                gap: '20px',
              }}
            >
              <TextField
                sx={{
                  width: '65px',
                }}
                disabled
                id="outlined-disabled"
                defaultValue="+92"
              />
              <InputMask mask={'999 9999999'} alwaysShowMask maskChar="*">
                {(inputProps) => <TextField {...inputProps} required id="outlined-required" />}
              </InputMask>
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: '20px',
                backgroundColor: '#FBBC04',
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
