import InputMask from 'react-input-mask';
// @mui

import { Button, Typography, TextField, Box } from '@mui/material';
import logoImage from '../assets/images/logoImage.svg';

// ----------------------------------------------------------------------

export default function OTP() {
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
              We just texted you!
            </Typography>
            <Typography
              sx={{
                color: '#767D87',
                fontSize: '14px',
                marginTop: '10px',
              }}
            >
              Please enter the code we just sent you at
            </Typography>
            <Typography
              sx={{
                color: '#078C61',
                fontSize: '14px',
              }}
            >
              +966987654321
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                paddingTop: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  minHeight: '30px',
                  minWidth: '30px',
                  backgroundColor: '#31D7EC',
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                00
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#078C61',
                }}
              >
                :
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  minHeight: '30px',
                  minWidth: '30px',
                  backgroundColor: '#31D7EC',
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                30
              </Box>
            </Box>

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
                id="outlined-disabled"
              />
              <TextField
                sx={{
                  width: '65px',
                }}
                id="outlined-disabled"
              />
              <TextField
                sx={{
                  width: '65px',
                }}
                id="outlined-disabled"
              />
              <TextField
                sx={{
                  width: '65px',
                }}
                id="outlined-disabled"
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: '20px',
                backgroundColor: '#FBBC04',
              }}
            >
              Verify
            </Button>
            <Box
              display={'flex'}
              justifyContent={'right'}
              gap={'2px'}
              sx={{
                marginTop: '20px',
              }}
            >
              <Typography
                sx={{
                  color: '#767D87',
                  fontSize: '14px',
                }}
              >
                Did not receive OTP?
              </Typography>
              <Typography
                sx={{
                  color: '#078C61',
                  fontSize: '14px',
                }}
              >
                Resend
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
