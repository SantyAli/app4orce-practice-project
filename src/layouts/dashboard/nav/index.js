import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// @mui
import { Box, Button, Drawer } from '@mui/material';
// components
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';

const NAV_WIDTH = 280;

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    e.preventDefault();
    // const languageValue = e.target.value;
    i18n.changeLanguage('ar');
  };
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={(e) => changeLanguageHandler(e)}
          sx={{
            backgroundColor: '#31D7EC',
            color: 'black',
          }}
        >
          {t('button')}
        </Button>
      </Box>

      <NavSection data={navConfig} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            bgcolor: 'background.default',
            borderRightStyle: 'dashed',
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
