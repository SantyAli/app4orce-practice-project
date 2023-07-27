import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigateTo = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (auth && auth.currentUser !== null) {
      navigateTo('/dashboard/app');
    } else {
      navigateTo('/main/signIn');
    }
  }, [auth]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Index;
