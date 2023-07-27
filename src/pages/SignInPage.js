import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Typography, TextField, Box } from '@mui/material';
// import firebase from '../firebase';
import { signInWithPhoneNumber, RecaptchaVerifier, getAuth } from 'firebase/auth';
import OtpInput from 'react-otp-input';
import firebase, { auth } from '../firebase';
// @mui
import logoImage from '../assets/images/logoImage.svg';
// ----------------------------------------------------------------------

export default function SignIn() {
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verification, setVerification] = useState(false);
  const [otp, setOtp] = useState('');
  const [lang, setLang] = useState('en');

  const inputStyle = {
    minWidth: '50px',
    minHeight: '50px',
    fontSize: '20px',
    margin: '15px',
    borderRadius: '5px',
  };

  //   console.log(firebase.auth);
  console.log('signIn', getAuth());
  const handleSendOTP = async (e) => {
    e.preventDefault();

    try {
      const appVerifier = new RecaptchaVerifier(auth, 'signinbutton', {
        size: 'invisible',
      });
      const number = `+92${phoneNumber}`;
      const confirmationResult = await signInWithPhoneNumber(auth, number, appVerifier);
      window.confirmationResult = confirmationResult;
      //   console.log( confirmationResult);
      setVerification(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
      const result = await window.confirmationResult.confirm(otp);
      //   navigateTo('/dashboard/app');
      console.log(result.user);
      navigateTo('/dashboard/app');
    } catch (error) {
      console.log('error', error);
      //   navigateTo('/main/signIn');
    }
  };

  const changeLanguageHandler = (e) => {
    e.preventDefault();
    // const languageValue = e.target.value;
    const language = lang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <>
      <Box
        sx={{
          padding: '30px',
        }}
      >
        <Button
          variant="contained"
          onClick={(e) => changeLanguageHandler(e)}
          sx={{
            backgroundColor: '#31D7EC',
            color: 'black',
            marginBottom: '20px',
          }}
        >
          {t('button')}
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
          {!verification ? (
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
                {t('enterPhone')}
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
                <InputMask
                  mask={'999 9999999'}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  alwaysShowMask
                  maskChar="*"
                >
                  {(inputProps) => <TextField {...inputProps} required id="outlined-required" />}
                </InputMask>
              </Box>
              <Button
                id="signinbutton"
                variant="contained"
                onClick={handleSendOTP}
                sx={{
                  marginTop: '20px',
                  backgroundColor: '#FBBC04',
                }}
              >
                {t('buttonText')}
              </Button>
            </Box>
          ) : (
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
                {t('textedYouText')}
              </Typography>
              <Typography
                sx={{
                  color: '#767D87',
                  fontSize: '14px',
                  marginTop: '10px',
                }}
              >
                {t('sendCodeText')}
              </Typography>
              <Typography
                sx={{
                  color: '#078C61',
                  fontSize: '14px',
                }}
              >
                {`+92${phoneNumber}`}
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
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  //   renderSeparator={<span></span>}
                  inputStyle={inputStyle}
                  renderInput={(props) => <input {...props} />}
                />
              </Box>
              <Button
                variant="contained"
                onClick={handleVerifyOTP}
                sx={{
                  marginTop: '20px',
                  backgroundColor: '#FBBC04',
                }}
              >
                {t('verifyButtonText')}
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
                  {t('otpText')}
                </Typography>
                <Typography
                  sx={{
                    color: '#078C61',
                    fontSize: '14px',
                  }}
                >
                  {t('resendButtonText')}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
